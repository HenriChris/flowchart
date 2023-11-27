import React from "react";
import { Container } from "./style";
import Semester from "../Semester";

function AllSemesters() {

    const Periodo1 = [
        { subject: { name: 'Programação de Computadores I', shortName: 'Comp I', id : 1, preRequisites : [], credits : 21, description : 'Lorem Ipsum.' }},
        { subject: { name: 'Processos de Software', shortName: 'Proc Sof', id : 2, preRequisites : [], credits : 21, description : 'Lorem Ipsum.' }},
        { subject: { name: 'Fund de Sistemas de Computação', shortName: 'FSC', id : 3, preRequisites : [], credits : 21, description : 'Lorem Ipsum.' }},
        { subject: { name: 'Números Inteiros Criptografia', shortName: 'Cripto', id : 4, preRequisites : [], credits : 21, description : 'Lorem Ipsum.' }},
        { subject: { name: 'Projeto de Carreira', shortName: 'Proj Car', id : 5, preRequisites : [], credits : 21, description : 'Lorem Ipsum.' }},
        { subject: { name: 'Introd Pensamento Dedutivo', shortName: 'IPD', id : 6, preRequisites : [], credits : 21, description : 'Lorem Ipsum.' }},
    ];
    const Periodo2 = [ 
        { subject: { name: 'Programação de Computadores II', shortName: 'Comp II', id : 7, preRequisites : ['1'], credits : 21, description : 'Lorem Ipsum.' }},
        { subject: { name: 'Organização de Dados I', shortName: 'Org Dados', id : 8, preRequisites : [], credits : 21, description : 'Lorem Ipsum.' }},
        { subject: { name: 'Projeto Prático', shortName: 'Proj Prat', id : 9, preRequisites : ['1', '2', '3'], credits : 21, description : 'Lorem Ipsum.' }},
        { subject: { name: 'Matemática Discreta', shortName: 'Mat Disc', id : 10, preRequisites : ['4'], credits : 21, description : 'Lorem Ipsum.' }},
        { subject: { name: 'Habilidades Sociais p Trabalho', shortName: 'Hab Soc', id : 11, preRequisites : ['5'], credits : 21, description : 'Lorem Ipsum.' }},
        { subject: { name: 'Cálculo Infinitesimal I', shortName: 'Calc I', id : 12, preRequisites : [], credits : 21, description : 'Lorem Ipsum.' }},
    ];
    const Periodo3 = [
        { subject: { name: 'Álgebra Linear Algorítmica', shortName: 'ALA', id : 13, preRequisites : [], credits : 21, description : 'Lorem Ipsum.' }},
        { subject: { name: 'Estrutura dos Dados', shortName: 'ED', id : 14, preRequisites : ['7'], credits : 21, description : 'Lorem Ipsum.' }},
        { subject: { name: 'Introd à Modelagem de Sistemas', shortName: 'IMS', id : 15, preRequisites : ['2'], credits : 21, description : 'Lorem Ipsum.' }},
        { subject: { name: 'Introd à Computação Numérica', shortName: 'ICN', id : 16, preRequisites : ['1', '3'], credits : 21, description : 'Lorem Ipsum.' }},
        { subject: { name: 'Programação Orientada a Objeto', shortName: 'POO', id : 17, preRequisites : ['7'], credits : 21, description : 'Lorem Ipsum.' }},
        { subject: { name: 'Cálculo Integ e Diferencial II', shortName: 'Calc II', id : 18, preRequisites : ['12'], credits : 21, description : 'Lorem Ipsum.' }},
    ];
    const Periodo4 = [    
        { subject: { name: 'Arquitet Comput e Sist Operac', shortName: 'Arq Comp SO', id : 19, preRequisites : ['3', '7'], credits : 21, description : 'Lorem Ipsum.' }},
        { subject: { name: 'Comput Científ e Análise Dados', shortName: 'Co CA Da', id : 20, preRequisites : ['13', '16'], credits : 21, description : 'Lorem Ipsum.' }},
        { subject: { name: 'Tecnologia e Sociedade', shortName: 'Tec Soc', id : 21, preRequisites : ['11'], credits : 21, description : 'Lorem Ipsum.' }},
        { subject: { name: 'Banco de Dados I', shortName: 'BD', id : 22, preRequisites : ['14'], credits : 21, description : 'Lorem Ipsum.' }},
        { subject: { name: 'Estatística e Probabilidade', shortName: 'Prob Est', id : 23, preRequisites : ['18'], credits : 21, description : 'Lorem Ipsum.' }},
    ];
    const Periodo5 = [   
        { subject: { name: 'Linguagens Formais', shortName: 'LF', id : 24, preRequisites : ['7', '10'], credits : 21, description : 'Lorem Ipsum.' }},
        { subject: { name: 'Modelagem e Aval de Desempenho', shortName: 'AD', id : 25, preRequisites : ['13', '23'], credits : 21, description : 'Lorem Ipsum.' }},
        { subject: { name: 'Model Matemát e Computacional', shortName: 'Mod Mat', id : 26, preRequisites : ['13', '18'], credits : 21, description : 'Lorem Ipsum.' }},
        { subject: { name: 'Computadores e Programação', shortName: 'Comp Prog', id : 27, preRequisites : ['19'], credits : 21, description : 'Lorem Ipsum.' }},
        { subject: { name: 'Algoritmos e Grafos', shortName: 'Alg Graf', id : 28, preRequisites : ['10', '14'], credits : 21, description : 'Lorem Ipsum.' }},
    ];
    const Periodo6 = [
        { subject: { name: 'Programação Concorrente', shortName: 'Comp Conc', id : 29, preRequisites : ['17', '27'], credits : 21, description : 'Lorem Ipsum.' }},
        { subject: { name: 'Redes de Computadores I', shortName: 'Redes', id : 30, preRequisites : ['1', '23'], credits : 21, description : 'Lorem Ipsum.' }},
        { subject: { name: 'Introd Aprendizado de Máquina', shortName: 'IA', id : 31, preRequisites : ['20', '23'], credits : 21, description : 'Lorem Ipsum.' }},
        { subject: { name: 'Otimização', shortName: 'Otim', id : 32, preRequisites : ['13', '16'], credits : 21, description : 'Lorem Ipsum.' }},
        { subject: { name: 'Lógica e Computabilidade', shortName: 'Log', id : 33, preRequisites : ['24'], credits : 21, description : 'Lorem Ipsum.' }},
    ];
    const Periodo7 = [
        { subject: { name: 'Metodologia da Pesquisa', shortName: 'Met Pesq', id : 34, preRequisites : ['21'], credits : 21, description : 'Lorem Ipsum.' }},
        { subject: { name: 'Segurança da Informação', shortName: 'Seg Info', id : 35, preRequisites : ['27', '30'], credits : 21, description : 'Lorem Ipsum.' }},
    ];

      return (
        <Container>
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
