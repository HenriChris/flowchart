import styled from "styled-components";

interface StyledComponentProps {
    backgroundcolor: string;
};

export const Container = styled.div`
    gap: 10px;
    display: flex;
    @media (max-width: 1279px) {
        flex-direction: column;
    };
`

export const Wrapper = styled.div`
    display: flex;
    gap: 10px;
`

export const Description = styled.div`
`

export const Box = styled.div<StyledComponentProps>`
    width: 20px;
    height: 20px;
    border-radius: 5px;
    background-color: ${props => props.backgroundcolor};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);
`