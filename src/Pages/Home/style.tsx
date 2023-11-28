import { PDFDownloadLink } from "@react-pdf/renderer";
import styled from "styled-components";
export interface StyledComponentProps {
    backgroundColor: string;
    color: string;
};

export const Container = styled.div<StyledComponentProps>`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-family: 'Inter', sans-serif;
    background-color: ${props => props.backgroundColor};
    color:${props => props.color};
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    gap: 1rem;
    margin-bottom: 1rem;
`

export const Header = styled.h1`
    display: flex;
    justify-content: center;
    gap: 2rem;
`

export const DarkModeButton = styled.div`
    cursor: pointer;
`

export const DownloadButton = styled(PDFDownloadLink)`
    color: white;
    background-color: #FF6666;
    font-weight: 700;
    font-size: 1.25rem;
    border: none;
    border-radius: 0.25rem;
    padding: 1rem 2rem;
    cursor: pointer;
    text-decoration: none;
    &:hover {
        opacity: 0.8;
    }
`