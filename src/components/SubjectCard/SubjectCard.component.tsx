import styles from './SubjectCard.module.css';
import { SubjectType } from "../../data/Subjects.data.";
import { useSubjectContext } from '../../contexts/Subject.context';

export function SubjectCard(subject: SubjectType) {

  const { darkMode } = useSubjectContext();

  return (
    <div className={`${styles.container} ${darkMode === "dark" ? styles.dark : styles.light}`}>
      <div className={styles.content}>
        <div className={styles.title}>Nome : </div> {subject.name}
      </div>
      <div className={styles.content}>
        <div className={styles.title}>Créditos : </div> {subject.credits === 0 ? '' : subject.credits}
      </div>
      <div className={styles.content}>
        <div className={styles.title}>Horário de aula : </div> {subject.schedule}
      </div>
      <div className={styles.content}>
        <div className={styles.title}>Nível de dificuldade : </div> {subject.difficultyLevel}
      </div>
      <div className={styles.content}>
        <div className={styles.title}>Estilo de avaliação : </div> {subject.evaluationStyle}
      </div>
      <div className={styles.content}>
        <div className={styles.title}>Professores atuais : </div> {subject.teachers}
      </div>
      <div className={styles.content}>
        <div className={styles.title}>Briga por vaga : </div> {subject.availability}
      </div>
      <div className={styles.content}>
        <div className={styles.title}>Dicas : </div> {subject.advice}
      </div>
      <div className={styles.content}>
        <div className={styles.title}>Ementa : </div> {subject.curriculum}
      </div>
    </div>
  )
};
