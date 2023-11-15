import styled from "styled-components";

interface StyledComponentProps {
    backgroundcolor: string;
};

export const Container = styled.div`
    width: 100%;
`

export const Parent = styled.div`
    text-align: center;
    /* border : 1px solid black; */
    border-radius: 8px;
    cursor: pointer;
    user-select: none;
    color: white;
    font-weight: 700;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 7vw;
    height: 70px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);
`

export const Wrapper = styled(Parent)<StyledComponentProps>`
    background-color: ${props => props.backgroundcolor};
`