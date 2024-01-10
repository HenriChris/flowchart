import React, { useEffect, useRef } from "react";
import { Container } from "./style";
import Semester from "../Semester";
import { useSubjectContext } from "../../Contexts/PreRequesites";

function AllSemesters() {

    const { setCurrentSubject } = useSubjectContext();
    const { setPreRequisiteIds } = useSubjectContext();
    const { setPostRequisiteIds } = useSubjectContext();

    function useOutsideAlerter(ref : React.RefObject<HTMLElement>) {
        useEffect(() => {
            function handleClickOutside(event : MouseEvent) {
                if (ref.current && !ref.current.contains(event.target as Node)) {
                    setCurrentSubject(0);
                    setPreRequisiteIds([]);
                    setPostRequisiteIds([]);
                };
            };
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    };

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

      return (
        <Container ref={wrapperRef}>
          <Semester props={Periodo1}/>
          <Semester props={Periodo2}/>
          <Semester props={Periodo3}/>
          <Semester props={Periodo4}/>
          <Semester props={Periodo5}/>
          <Semester props={Periodo6}/>
          <Semester props={Periodo7}/>
        </Container>
      );
};

export default AllSemesters;

const Periodo1 = [
    { subject: { name: 'Programação de Computadores I', shortName: 'Comp I', id : 1, preRequisites : [], postRequisites : ['7', '9', '16', '30'] }},
    { subject: { name: 'Processo de Software', shortName: 'Proc Sof', id : 2, preRequisites : [], postRequisites : ['9', '15'] }},
    { subject: { name: 'Fundamentos de Sistemas de Computação', shortName: 'FSC', id : 3, preRequisites : [], postRequisites : ['9', '16', '19'] }},
    { subject: { name: 'Números Inteiros e Criptografia', shortName: 'Cripto', id : 4, preRequisites : [], postRequisites : ['10'] }},
    { subject: { name: 'Projeto de Carreira', shortName: 'Proj Car', id : 5, preRequisites : [], postRequisites : ['11'] }},
    { subject: { name: 'Introdução ao Pensamento Dedutivo', shortName: 'IPD', id : 6, preRequisites : [], postRequisites : [] }},
];
const Periodo2 = [ 
    { subject: { name: 'Programação de Computadores II', shortName: 'Comp II', id : 7, preRequisites : ['1'], postRequisites : ['14', '17', '19', '24'] }},
    { subject: { name: 'Organização de Dados', shortName: 'Org Dados', id : 8, preRequisites : [], postRequisites : [] }},
    { subject: { name: 'Projeto Prático', shortName: 'Proj Prat', id : 9, preRequisites : ['1', '2', '3'], postRequisites : [] }},
    { subject: { name: 'Matemática Discreta', shortName: 'Mat Disc', id : 10, preRequisites : ['4'], postRequisites : ['24', '28'] }},
    { subject: { name: 'Habilidades Sociais para o Trabalho', shortName: 'Hab Soc', id : 11, preRequisites : ['5'], postRequisites : ['21'] }},
    { subject: { name: 'Cálculo Infinitesimal I', shortName: 'Calc I', id : 12, preRequisites : [], postRequisites : ['18'] }},
];
const Periodo3 = [
    { subject: { name: 'Álgebra Linear Algorítmica', shortName: 'ALA', id : 13, preRequisites : [], postRequisites : ['20', '25', '26', '32'] }},
    { subject: { name: 'Estrutura de Dados', shortName: 'ED', id : 14, preRequisites : ['7'], postRequisites : ['22', '28'] }},
    { subject: { name: 'Introdução à Modelagem de Sistemas', shortName: 'IMS', id : 15, preRequisites : ['2'], postRequisites : [] }},
    { subject: { name: 'Introdução à Computação Numérica', shortName: 'ICN', id : 16, preRequisites : ['1', '3'], postRequisites : ['20', '32'] }},
    { subject: { name: 'Programação Orientada a Objetos', shortName: 'POO', id : 17, preRequisites : ['7'], postRequisites : ['29'] }},
    { subject: { name: 'Cálculo Integ e Diferencial II', shortName: 'Calc II', id : 18, preRequisites : ['12'], postRequisites : ['23', '26'] }},
];
const Periodo4 = [    
    { subject: { name: 'Arquitetura de Computadores e Sistemas Operacionais', shortName: 'Arq Comp SO', id : 19, preRequisites : ['3', '7'], postRequisites : ['27'] }},
    { subject: { name: 'Computação Científica e Análise de Dados', shortName: 'Co CA Da', id : 20, preRequisites : ['13', '16'], postRequisites : ['31'] }},
    { subject: { name: 'Tecnologia e Sociedade', shortName: 'Tec Soc', id : 21, preRequisites : ['11'], postRequisites : ['34'] }},
    { subject: { name: 'Banco de Dados I', shortName: 'BD', id : 22, preRequisites : ['14'], postRequisites : [] }},
    { subject: { name: 'Estatística e Probabilidade', shortName: 'Prob Est', id : 23, preRequisites : ['18'], postRequisites : ['25', '30', '31'] }},
];
const Periodo5 = [   
    { subject: { name: 'Linguagens Formais', shortName: 'LF', id : 24, preRequisites : ['7', '10'], postRequisites : ['33'] }},
    { subject: { name: 'Modelagem e Avaliação de Desempenho', shortName: 'AD', id : 25, preRequisites : ['13', '23'], postRequisites : [] }},
    { subject: { name: 'Modelagem Matemática e Computacional', shortName: 'Mod Mat', id : 26, preRequisites : ['13', '18'], postRequisites : [] }},
    { subject: { name: 'Computadores e Programação', shortName: 'Comp Prog', id : 27, preRequisites : ['19'], postRequisites : ['29', '35'] }},
    { subject: { name: 'Algoritmos e Grafos', shortName: 'Alg Graf', id : 28, preRequisites : ['10', '14'], postRequisites : [] }},
];
const Periodo6 = [
    { subject: { name: 'Programação Concorrente', shortName: 'Comp Conc', id : 29, preRequisites : ['17', '27'], postRequisites : [] }},
    { subject: { name: 'Redes de Computadores I', shortName: 'Redes', id : 30, preRequisites : ['1', '23'], postRequisites : ['35'] }},
    { subject: { name: 'Introdução ao Aprendizado de Máquina', shortName: 'IA', id : 31, preRequisites : ['20', '23'], postRequisites : [] }},
    { subject: { name: 'Otimização', shortName: 'Otim', id : 32, preRequisites : ['13', '16'], postRequisites : [] }},
    { subject: { name: 'Lógica e Computabilidade', shortName: 'Log', id : 33, preRequisites : ['24'], postRequisites : [] }},
];
const Periodo7 = [
    { subject: { name: 'Metodologia da Pesquisa', shortName: 'Met Pesq', id : 34, preRequisites : ['21'], postRequisites : [] }},
    { subject: { name: 'Segurança da Informação', shortName: 'Seg Info', id : 35, preRequisites : ['27', '30'], postRequisites : [] }},
];
