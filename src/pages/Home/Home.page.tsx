import styles from './Home.module.css';
import { Subjects } from '../../components/Subjects/Subjects.component';
import { FiSun } from "react-icons/fi";
import { FaRegMoon } from "react-icons/fa";
import { mandatories } from '../../data/Subjects.data.';
import { SubjectCard } from '../../components/SubjectCard/SubjectCard.component';
import { useSubjectContext } from '../../contexts/Subject.context';
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoMdInformationCircle } from "react-icons/io";
import { useState } from 'react';
import { InfoModal } from '../../components/InfoModal/InfoModal.component';

const legends = [
  {
    text: "Ainda não feita",
    color: "#ff6666",
  },
  {
    text: "Pré-requisito",
    color: "#3498db",
  },
  {
    text: "Falta requisito",
    color: "#a0a0a0",
  },
  {
    text: "Tranca",
    color: "#ac34db",
  },
  {
    text: "Já feita",
    color: "#2ecc71",
  },
]

export function Home() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const { currentSubject } = useSubjectContext();
  const { darkMode, setDarkMode } = useSubjectContext();

  function handleDarkModeButtonClick() {
    if (darkMode === "dark") {
      localStorage.setItem("darkMode", JSON.stringify("light"));
      setDarkMode("light");
    }
    else {
      localStorage.setItem("darkMode", JSON.stringify("dark"));
      setDarkMode("dark");
    };
  };

  const subject = mandatories.find(subject => subject.id === currentSubject?.subjectId);

  return (
    <div className={`${styles.container} ${darkMode === "dark" ? styles.dark : styles.light}`}>
      <header className={styles.header}>
        <h1>Flowchart</h1>
        <button onClick={handleDarkModeButtonClick} className={`${styles.button} ${darkMode === "dark" ? styles.dark : styles.light}`}>
          {darkMode === "dark" ?
            <FiSun className={styles.icon} /> :
            <FaRegMoon className={styles.icon} />
          }
        </button>
        <button onClick={() => setIsModalOpen(true)} className={`${styles.button} ${styles.info} ${darkMode === "dark" ? styles.dark : styles.light}`}>
          {darkMode === "dark" ?
            <IoMdInformationCircle className={styles.icon} /> :
            <IoIosInformationCircleOutline className={styles.icon} />
          }
        </button>
      </header>
      <main className={styles.main}>
        <Subjects />
        <section className={styles["legend-container"]}>
          {legends.map((legend, index) => {
            return (
              <div key={index} className={styles.legend}>
                <div className={styles["legend-box"]} style={{ backgroundColor: legend.color }} />
                <div>{legend.text}</div>
              </div>
            )
          })}
        </section>
        {subject ?
          <SubjectCard {...subject} />
          :
          <SubjectCard {...mandatories[0]} />
        }
        {isModalOpen && <InfoModal setIsModalOpen={setIsModalOpen} />}
      </main>
    </div>
  );
}