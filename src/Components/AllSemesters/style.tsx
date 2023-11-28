import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    padding: 0.25rem;
    width: 100%;
    gap: 2%;
    clip-path: polygon(0% 0%, 0% 100%, 43% 100%, 43% 85%, 86% 85%, 86% 33%, 100% 33%, 100% 0%);
    @media (max-width: 1279px) {
        flex-direction: column;
        gap: 0.5rem;
        clip-path: polygon(0% 0%, 0% 100%, 34% 100%, 34% 86%, 84% 86%, 84% 44%, 100% 44%, 100% 0%);
    };
`