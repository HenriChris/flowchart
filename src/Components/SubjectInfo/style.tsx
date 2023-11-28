import styled from "styled-components";
import { StyledComponentProps } from "../../Pages/Home/style";

export const Container = styled.div<StyledComponentProps>`
    background-color: ${props => props.backgroundColor};
    border: 1px solid #ddd;
    padding: 1rem;
    border-radius: 0.25rem;
    height: fit-content;
    width: 100%;
`

export const Content = styled.div`
    margin-bottom: 0.75rem;
`

export const Title = styled.div`
    font-weight: bold;
`