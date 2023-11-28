import React from "react";
import { Box, Container, Description, Wrapper } from "./style";
import { red, blue, gray, purple, green } from "../Subject";

function Legend () {
    
    return (
        <Container>
            
            <Wrapper>
                <Box backgroundcolor={red}/>
                <Description>Ainda não feita</Description>
            </Wrapper>

            <Wrapper>
                <Box backgroundcolor={blue}/>
                <Description>Pré-requisito de</Description>
            </Wrapper>

            <Wrapper>
                <Box backgroundcolor={gray}/>
                <Description>Falta requisito</Description>
            </Wrapper>

            <Wrapper>
                <Box backgroundcolor={purple}/>
                <Description>É trancado por</Description>
            </Wrapper>

            <Wrapper>
                <Box backgroundcolor={green}/>
                <Description>Já feita</Description>
            </Wrapper>

        </Container>
    )
};

export default Legend;