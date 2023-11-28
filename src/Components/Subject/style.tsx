import styled from "styled-components";

interface StyledComponentProps {
    backgroundcolor: string;
    outline: string,
};

export const Container = styled.div`
    width: 100%;
`

export const Parent = styled.div`
    text-align: center;
    border-radius: 8px;
    cursor: pointer;
    user-select: none;
    color: white;
    font-weight: 700;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 10vw;
    padding: 5px;
    height: 70px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);
    @media (max-width: 1279px) {
        width: 12vw;
        padding: 2px;
        height: 50px;
    }
`

export const Wrapper = styled(Parent)<StyledComponentProps>`
    background-color: ${props => props.backgroundcolor};
    outline: ${props => props.outline};
`