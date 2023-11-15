import React from 'react';
import { Container, Wrapper } from './style';
import { useState } from 'react';
import { useSubjectContext } from '../../Contexts/PreRequesites';

export type SubjectData = {
    id: number,
    name: string,
    preRequisites : string[],
    credits : number,
    description : string,
};

export type SubjectProps = {
    subject: SubjectData,
};

function Subject({ subject } : SubjectProps) {
    
    /* const [completed, setCompleted] = useState(0); */
    const {completed, setCompleted} = useSubjectContext();
    const { setCurrentSubject } = useSubjectContext();
    const { lockIds, setLockIds } = useSubjectContext();

    function handleMouseEnter (data : SubjectData) {
        setLockIds(data.preRequisites);
        setCurrentSubject(data.id);
    };

    function handleMouseLeave () {
        setCurrentSubject(0);
        setLockIds([]);
    };

    function isClickable (completed : number[], preRequisites : string[]) {
        let unfullfilled = 0;
        for (const element of preRequisites) {
            if (completed[parseInt(element)] === 0) {
                unfullfilled += 1
            };
        };
        return unfullfilled === 0;
    };

    function handleClick () {
        const newCompleted = completed.map((element, index) => {
            if (index === subject.id) {
              return element ? 0 : 1;
            } else {
              return element;
            }
        });
        setCompleted(newCompleted);
    };

    return (
        <Container>
            {isClickable(completed, subject.preRequisites) ? 
                <Wrapper
                    onClick={() => handleClick()}
                    onMouseEnter={() => handleMouseEnter(subject)}
                    onMouseLeave={() => handleMouseLeave()}
                    backgroundcolor={ lockIds.includes(String(subject.id))? 'blue' : completed[subject.id] ? 'green' : 'red'}
                >
                    {subject.name}
                </Wrapper>
            :
                <Wrapper
                    onMouseEnter={() => handleMouseEnter(subject)}
                    onMouseLeave={() => handleMouseLeave()}
                    backgroundcolor={ lockIds.includes(String(subject.id))? 'blue' : 'grey' }
                >
                    {subject.name}
                </Wrapper>
            }
        </Container>
  );
};

export default Subject;
