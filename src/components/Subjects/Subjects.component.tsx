import styles from './Subjects.module.css';
import { useEffect, useRef } from "react";
import { mandatories, semesters } from "../../data/Subjects.data.";
import { Subject } from "../Subject/Subject.component";
import { useSubjectContext } from '../../contexts/Subject.context';

export function Subjects() {
  const { setCurrentSubject } = useSubjectContext();
  const subjectRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {

    function handleClickOutside(event: MouseEvent) {
      const clickedInsideAny = Object.values(subjectRefs.current).some((ref) =>
        ref?.contains(event.target as Node)
      );

      if (!clickedInsideAny) {
        setCurrentSubject(null);
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setCurrentSubject(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [setCurrentSubject]);

  return (
    <section className={styles.container}>
      {semesters.map((semester, index) => (
        <div key={index} className={styles.semester}>
          {mandatories.filter(subject => semester.includes(subject.id)).map((subject) => (
            <div
              key={subject.id}
              ref={el => {
                subjectRefs.current[subject.id] = el;
              }}
            >
              <Subject {...subject} />
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}