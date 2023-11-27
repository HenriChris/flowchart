import React from "react";
import { Box, Container, Description, Wrapper } from "./style";

function Legend () {

    const red = '#FF6666';
    const green = '#2ecc71';
    const blue = '#3498db';
    const purple = '#ac34db';
    const gray = '#A0A0A0';
    
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