import { PDFDownloadLink } from "@react-pdf/renderer";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    font-family: 'Inter', sans-serif;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3vw;
`

export const DownloadButton = styled(PDFDownloadLink)`
    font-weight: 600;
    font-size: 20px;
    color: white;
    background-color: #FF6666;
    border: none;
    border-radius: 5px;
    padding: 20px 10px;
    cursor: pointer;
    text-decoration: none;
    &:hover {
        opacity: 0.8;
    }
`