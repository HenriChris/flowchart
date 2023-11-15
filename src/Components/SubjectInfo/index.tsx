import React from "react";
import { Container } from "./style";

export type SubjectInfoData = {
    id: number,
    name: string,
    preRequisites : string[],
    credits : number,
    content : string,
    difficultyLevel : string,
    exams : string,
    teachers : string,
    advice : string,
    availability : string,
    time : string,
};

function SubjectInfo (props : SubjectInfoData) {
    return (
        <Container>
            <p>Nome : {props.name}</p>
            <p>Créditos : {props.credits}</p>
            <p>Nível de dificuldade : {props.difficultyLevel}</p>
            <p>Estilo de avaliação : {props.exams}</p>
            <p>Professores atuais : {props.teachers}</p>
            <p>Ementa : {props.content}</p>
            <p>Dica : {props.advice}</p>
            <p>Disponibilidade : {props.availability}</p>
            <p>Horário de aula : {props.time}</p>
        </Container>
    )
};

export default SubjectInfo;