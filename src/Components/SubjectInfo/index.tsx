import React from "react";
import { Container, Content, Title } from "./style";

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
            <Content><Title>Nome : </Title> {props.name}</Content>
            <Content><Title>Créditos : </Title> {props.credits === 0 ? '' : props.credits}</Content>
            <Content><Title>Horário de aula : </Title> {props.time}</Content>
            <Content><Title>Nível de dificuldade : </Title> {props.difficultyLevel}</Content>
            <Content><Title>Estilo de avaliação : </Title> {props.exams}</Content>
            <Content><Title>Professores atuais : </Title> {props.teachers}</Content>
            <Content><Title>Briga por vaga : </Title> {props.availability}</Content>
            <Content><Title>Dicas : </Title> {props.advice}</Content>
            <Content><Title>Ementa : </Title> {props.content}</Content>
        </Container>
    )
};

export default SubjectInfo;