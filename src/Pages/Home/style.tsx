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
    flex-direction: row;
    gap: 3vw;
`

export const SheetsButton = styled.button`
    font-weight: 600;
    font-size: 20px;
    color: white;
    background-color: #FF6666;
    border: none;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
`