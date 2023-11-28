import styled from "styled-components";
interface StyledComponentProps {
    backgroundcolor: string;
    outline: string,
};

export const Container = styled.div<StyledComponentProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 0.5rem;
    cursor: pointer;
    user-select: none;
    font-weight: 700;
    padding: 0.5%;  
    height: 6rem;
    color: white;
    background-color: ${props => props.backgroundcolor};
    outline: ${props => props.outline};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);
    @media (max-width: 1279px) {
        width: 14%;
        height: 3.5rem;
    } 
`