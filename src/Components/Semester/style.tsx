import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1.25rem;
    @media (max-width: 1279px) {
        flex-direction: row;
        gap: 2%;
    };
`