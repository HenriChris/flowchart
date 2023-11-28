import React, { useEffect, useRef } from 'react';
import { Container } from './style';
import { useSubjectContext } from '../../Contexts/PreRequesites';

export type SubjectData = {
    id: number,
    name: string,
    shortName: string,
    preRequisites : string[],
    postRequisites : string[],
};

export type SubjectProps = {
    subject: SubjectData,
};

export const red = '#FF6666';
export const green = '#2ecc71';
export const blue = '#3498db';
export const purple = '#ac34db';
export const gray = '#A0A0A0';

function Subject({ subject } : SubjectProps) {
    
    const {completed, setCompleted} = useSubjectContext();
    const { currentSubject, setCurrentSubject } = useSubjectContext();
    const { preRequisiteIds, setPreRequisiteIds } = useSubjectContext();
    const { postRequisiteIds, setPostRequisiteIds } = useSubjectContext();

    const [width, setWidth] = React.useState(window.innerWidth);
    
    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);


    function isClickable (completed : number[], preRequisites : string[]) {
        let unfullfilled = 0;
        for (const element of preRequisites) {
            if (completed[parseInt(element)] === 0) {
                unfullfilled += 1
            };
        };
        return unfullfilled === 0;
    };

    function handleClick (data : SubjectData) {
        
        const newCompleted = completed.map((element, index) => {
            if (index === subject.id) return element ? 0 : 1;
            else return element;
        });

        if (currentSubject === data.id && isClickable(completed, data.preRequisites)) {
            setCompleted(newCompleted);
            localStorage.setItem('newCompleted', JSON.stringify(newCompleted));
        }
        else {
            setPreRequisiteIds([]);
            setPostRequisiteIds([]);
        };

        setCurrentSubject(data.id);

        setPreRequisiteIds(data.preRequisites);
        setPostRequisiteIds(data.postRequisites);
        
    };

    function backgroundColor (data : SubjectData) {
        if (postRequisiteIds.includes(String(subject.id))) return purple;
        else if (preRequisiteIds.includes(String(subject.id))) return blue;
        else if (completed[data.id]) return green;
        else if (isClickable(completed, data.preRequisites)) return red;
        else return gray;
    };

    return (
        <Container
            onClick={() => handleClick(subject)}
            backgroundcolor={backgroundColor(subject)}
            outline = {subject.id === currentSubject ? `2px solid ${blue}` : ''}
        >
            {width > 1279 ? subject.name : subject.shortName}
        </Container>
  );
};

export default Subject;
