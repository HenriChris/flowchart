import styles from './Subject.module.css';
import { electives, humanities, SubjectType } from '../../data/Subjects.data.';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useSubjectContext } from '../../contexts/Subject.context';
import { SelectElectiveModal } from '../SelectElectiveModal/SelectElectiveModal.component';

export const red = '#FF6666';
export const green = '#2ECC71';
export const blue = '#3498DB';
export const purple = '#AC34DB';
export const gray = '#A0A0A0';
export const pink = '#F00C90';

export function Subject(subject: SubjectType) {
  const {
    currentSubject,
    setCurrentSubject,
    completedSubjectIds,
    setCompletedSubjectIds,
    selectedElectives,
  } = useSubjectContext();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [width, setWidth] = useState<number>(() => typeof window !== 'undefined' ? window.innerWidth : 0);
  const [isHolding, setIsHolding] = useState(false);
  const [holdTime, setHoldTime] = useState(0);
  const holdTimeout = useRef<NodeJS.Timeout | null>(null);

  const newSubject = electives.find(elective => elective.id === selectedElectives[subject.id]) || humanities.find(elective => elective.id === selectedElectives[subject.id]) || subject;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const handleClick = () => {
    if (currentSubject && currentSubject.subjectId === newSubject.id && isClickable) {
      if (!completedSubjectIds.includes(newSubject.id)) {
        setCompletedSubjectIds((prev) => {
          const ids = [...prev, currentSubject.subjectId];
          localStorage.setItem('completed', JSON.stringify(ids));
          return ids;
        });
      } else {
        setCompletedSubjectIds((prev) => {
          const ids = prev.filter(id => id !== newSubject.id);
          localStorage.setItem('completed', JSON.stringify(ids));
          return ids;
        });
      }
    }

    setCurrentSubject({
      subjectId: newSubject.id,
      preRequisiteIds: newSubject.preRequisites,
      postRequisiteIds: newSubject.postRequisites
    });
  };

  const handleHoldStart = () => {
    setIsHolding(true);
    setHoldTime(0);

    holdTimeout.current = setTimeout(() => {
      holdTimeout.current = setInterval(() => {
        setHoldTime((prev) => {
          if (prev >= 1000) {
            clearInterval(holdTimeout.current!);
            setIsModalOpen(true);
            handleHoldEnd();
            return prev;
          }
          return prev + 10;
        });
      }, 10);
    }, 200);
  };

  const handleHoldEnd = () => {
    setIsHolding(false);
    setHoldTime(0);
    if (holdTimeout.current) {
      clearInterval(holdTimeout.current);
      holdTimeout.current = null;
    }
  };


  const isClickable = useMemo(() => {
    return newSubject.preRequisites.every((id) => completedSubjectIds.includes(id));
  }, [newSubject, completedSubjectIds]);

  const backgroundColor = useMemo(() => {
    if (currentSubject?.postRequisiteIds.includes(newSubject.id)) return purple;
    if (currentSubject?.preRequisiteIds.includes(newSubject.id)) return blue;
    if (completedSubjectIds.includes(newSubject.id)) return green;
    if (isClickable) return red;
    return gray;
  }, [newSubject, currentSubject, completedSubjectIds, isClickable]);

  const progressPercentage = useMemo(() => Math.min(holdTime / 1000, 10), [holdTime]);

  const progressBarStyle = {
    background: `linear-gradient(to right, #C13584 ${progressPercentage * 100}%, ${backgroundColor} ${progressPercentage * 100}%)`,
    transition: 'background 0.3s ease',
  };

  if (subject.id !== newSubject.id) {
    return (
      <>
        <div
          onMouseDown={handleHoldStart}
          onMouseUp={handleHoldEnd}
          onTouchStart={handleHoldStart}
          onTouchEnd={handleHoldEnd}
          onClick={() => !isHolding && handleClick()}
          className={styles.container}
          style={{
            ...progressBarStyle,
            transition: 'background 0.3s ease',
            outline: currentSubject?.subjectId === newSubject.id ? `2px solid ${blue}` : ''
          }}
        >
          {width > 600 ? newSubject.name : newSubject.shortName}
        </div>
        {isModalOpen && (
          <SelectElectiveModal
            id={subject.id}
            setIsModalOpen={setIsModalOpen}
          />
        )}
      </>
    );
  } else if (['ELE1', 'ELE2', 'ELE3', 'ELE4', 'ELE5', 'ELE6', 'ELE7', 'ELE8', 'ELE9', 'ELE10', 'ELE11'].includes(newSubject.id)) {
    return (
      <>
        <div
          onClick={() => setIsModalOpen(true)}
          className={styles.container}
          style={{ backgroundColor: pink }}
        >
          {width > 600 ? newSubject.name : newSubject.shortName}
        </div>
        {isModalOpen && (
          <SelectElectiveModal
            id={subject.id}
            setIsModalOpen={setIsModalOpen}
          />
        )}
      </>
    );
  } else {
    return (
      <div
        onClick={handleClick}
        className={styles.container}
        style={{
          backgroundColor: backgroundColor,
          outline: currentSubject?.subjectId === newSubject.id ? `2px solid ${blue}` : ''
        }}
      >
        {width > 600 ? newSubject.name : newSubject.shortName}
      </div>
    );
  }
};