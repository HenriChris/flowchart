import styled from "styled-components";

interface StyledComponentProps {
    backgroundcolor: string;
};

export const Container = styled.div`
    width: 100%;
    gap: 0.5rem;
    display: flex;
    @media (max-width: 1279px) {
        flex-direction: column;
        align-self: flex-start;
    };
`

export const Wrapper = styled.div`
    display: flex;
    text-align: center;
    gap: 0.5rem;
`

export const Description = styled.div`
`

export const Box = styled.div<StyledComponentProps>`
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 0.5rem;
    background-color: ${props => props.backgroundcolor};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);
`