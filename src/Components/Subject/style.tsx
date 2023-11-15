import styled from "styled-components";

interface StyledComponentProps {
    backgroundcolor: string;
};

export const Container = styled.div`
    display: flex;
    justify-content: center;
    /* align-content: center; */
    text-align: center;
    border : 1px solid black;
    border-radius: 8px;
    cursor: pointer;
    user-select: none;
    color: white;
    font-weight: 700;
`

export const Parent = styled.div`
    padding: 15px;
    height: 50px;
    width: 100%;
`

export const Wrapper = styled(Parent)<StyledComponentProps>`
    background-color: ${props => props.backgroundcolor || 'gray'};
`