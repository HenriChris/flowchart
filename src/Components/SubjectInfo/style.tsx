import styled from "styled-components";

export const Container = styled.div`
    background-color: #f5f5f5;
    border: 1px solid #ddd;
    padding: 20px;
    border-radius: 5px;
    width: 82vw;
    height: 70vh;
    @media (max-width: 1279px) {
        width: 80vw;
    }
`

export const Content = styled.div`
    margin-bottom: 10px;
`

export const Title = styled.div`
    font-weight: bold;
    margin-right: 5px;
`