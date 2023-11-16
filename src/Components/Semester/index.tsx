import React from 'react';
import { Container } from './style';
import Subject, { SubjectProps } from '../Subject';

export type MateriaPropsArray = SubjectProps[];

export type SemesterProps = {
    props: SubjectProps[];
};

function Semester( { props } : SemesterProps) {
    
    return (
        <Container>
            {props.map((subjects) => (
                <Subject key={subjects.subject.id} subject={subjects.subject}/>
            ))}
        </Container>
  );
};

export default Semester;
