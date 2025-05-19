import styles from './Modal.module.css';
import { IoMdClose } from 'react-icons/io';
import { useRef, useEffect, useCallback, ReactNode } from "react";
import { useSubjectContext } from '../../contexts/Subject.context';

type ModalProps = {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode,
};

export function Modal({ setIsModalOpen, children }: ModalProps) {
  const { darkMode } = useSubjectContext();
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = useCallback((e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setIsModalOpen(false);
    }
  }, [setIsModalOpen]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsModalOpen(false);
    }
  }, [setIsModalOpen]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleClickOutside, handleKeyDown]);

  return (
    <div className={`${styles['modal-container']}`} role="dialog">
      <div className={`${styles.modal} ${darkMode === "dark" ? styles.dark : styles.light}`} ref={modalRef}>
        <button
          className={styles['close-button']}
          onClick={() => setIsModalOpen(false)}
        >
          <IoMdClose className={styles.icon} />
        </button>
        {children}
      </div>
    </div>
  );
}

