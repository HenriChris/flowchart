import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    gap: 2vw;
    clip-path: polygon(0% 0%, 0% 100%, 42% 100%, 42% 85%, 86% 85%, 86% 33%, 100% 33%, 100% 0%);
    @media (max-width: 1279px) {
        flex-direction: column;
        clip-path: polygon(0% 0%, 0% 100%, 31% 100%, 31% 86%, 83% 86%, 83% 43%, 100% 43%, 100% 0%);
    };
`