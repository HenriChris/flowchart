import styles from './SelectElectiveModal.module.css';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { electives, humanities } from '../../data/Subjects.data.';
import { useSubjectContext } from '../../contexts/Subject.context';
import { Modal } from '../Modal/Modal.component';

type SelectElectiveModalProps = {
  id: string;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export function SelectElectiveModal({ id, setIsModalOpen }: SelectElectiveModalProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState('');
  const { selectedElectives, setSelectedElectives, darkMode } = useSubjectContext();
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const filteredElectives = useMemo(() =>
    electives.filter((elective) =>
      !(Object.values(selectedElectives).includes(elective.id)) && (elective.name.toLowerCase().includes(debouncedSearchQuery.toLowerCase()) || elective.id.includes(debouncedSearchQuery))
    ), [selectedElectives, debouncedSearchQuery]);

  const filteredHumanities = useMemo(() =>
    humanities.filter((elective) =>
      !(Object.values(selectedElectives).includes(elective.id)) && (elective.name.toLowerCase().includes(debouncedSearchQuery.toLowerCase()) || elective.id.includes(debouncedSearchQuery))
    ), [selectedElectives, debouncedSearchQuery]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setIsModalOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [setIsModalOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [setIsModalOpen]);

  const handleSelectElective = useCallback((electiveId: string) => {
    setSelectedElectives((prev) => {
      const newSelectedElectives = { ...prev, [id]: electiveId };
      localStorage.setItem('electives', JSON.stringify(newSelectedElectives));
      return newSelectedElectives;
    });
    setIsModalOpen(false);
  }, [id, setSelectedElectives, setIsModalOpen]);

  return (
    <Modal setIsModalOpen={setIsModalOpen}>
      <div className={styles.header}>
        <h3>Selecione uma eletiva</h3>
      </div>

      <input
        type="text"
        placeholder="Pesquisar eletiva..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className={styles.search}
      />

      <ul className={styles.list}>
        {filteredElectives.length > 0 && (
          <li className={`${styles['sticky-header']} ${darkMode === "dark" ? styles.dark : styles.light}`}>Eletivas condicionadas:</li>
        )}
        {filteredElectives.map((elective) => (
          <li key={elective.id}>
            <button
              onClick={() => handleSelectElective(elective.id)}
              className={`${styles['list-item']} ${darkMode === "dark" ? styles.dark : styles.light}`}
            >
              {elective.id} | {elective.name}
            </button>
          </li>
        ))}

        {filteredHumanities.length > 0 && (
          <li className={`${styles['sticky-header']} ${darkMode === "dark" ? styles.dark : styles.light}`}>Humanas:</li>
        )}
        {filteredHumanities.map((elective) => (
          <li key={elective.id}>
            <button
              onClick={() => handleSelectElective(elective.id)}
              className={`${styles['list-item']} ${darkMode === "dark" ? styles.dark : styles.light}`}
            >
              {elective.id} | {elective.name}
            </button>
          </li>
        ))}

        {filteredElectives.length === 0 && filteredHumanities.length === 0 && (
          <li>Nenhuma eletiva encontrada.</li>
        )}
      </ul>

    </Modal>
  );
}
