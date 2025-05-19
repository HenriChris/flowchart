import styles from './InfoModal.module.css';
import { Modal } from '../Modal/Modal.component';

type InfoModalProps = {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export function InfoModal({ setIsModalOpen }: InfoModalProps) {
  return (
    <Modal setIsModalOpen={setIsModalOpen}>
      <h3>Como utilizar</h3>
      <ul className={styles.list}>
        <li>Clique em uma disciplina para poder visualizar dados sobre ela, além de seus pré-requisitos e as disciplinas que ela prende.</li>
        <li>Clique novamente para mudar seu estado entre ainda não feita e já feita. Isso só é possível se todas as disciplinas que são pré-requisitos da atual já foram marcadas como feitas.</li>
        <li>Clique em Escolha uma eletiva para selecionar uma eletiva condicionada ou humanas de escolha restrita.</li>
        <li>Caso queira alterar a escolha de disciplina eletiva, segure o botão correspondente por 1 segundo.</li>
        <li>Devido aos fatos de que algumas disciplinas trancam eletivas e que algumas eletivas possuem outras eletivas como pré-requisito, nem sempre todas as matérias que são pré-requisitos de/trancam a matéria selecionada vão aparecer na sua página.</li>
        <li>É possível a existência de erros e informações desatualizadas. Sempre consulte a grade no SIGA para se garantir.</li>
      </ul>
    </Modal >
  )
}

