import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    @media (max-width: 1279px) {
        flex-direction: row;
        align-self: flex-start;
    };
`