import React from 'react';
import { Container, Wrapper } from './style';
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

function Subject({ subject } : SubjectProps) {
    
    const {completed, setCompleted} = useSubjectContext();
    const { setCurrentSubject } = useSubjectContext();
    const { preRequisiteIds, setPreRequisiteIds } = useSubjectContext();
    const { postRequisiteIds, setPostRequisiteIds } = useSubjectContext();

    const [width, setWidth] = React.useState(window.innerWidth);
    
    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    function handleMouseEnter (data : SubjectData) {
        setPreRequisiteIds(data.preRequisites);
        setPostRequisiteIds(data.postRequisites);
        setCurrentSubject(data.id);
    };

    function handleMouseLeave () {
        setCurrentSubject(0);
        setPreRequisiteIds([]);
        setPostRequisiteIds([]);
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
        localStorage.setItem('newCompleted', JSON.stringify(newCompleted));
    };

    const red = '#FF6666';
    const green = '#2ecc71';
    const blue = '#3498db';
    const purple = '#ac34db';
    const gray = '#A0A0A0';

    return (
        <Container>
            {isClickable(completed, subject.preRequisites) ? 
                <Wrapper
                    onClick={() => handleClick()}
                    onMouseEnter={() => handleMouseEnter(subject)}
                    onMouseLeave={() => handleMouseLeave()}
                    backgroundcolor={ postRequisiteIds.includes(String(subject.id)) ? purple : (preRequisiteIds.includes(String(subject.id))? blue : completed[subject.id] ? green : red) }
                >
                    {width > 1279 ? subject.name : subject.shortName}
                </Wrapper>
            :
                <Wrapper
                    onMouseEnter={() => handleMouseEnter(subject)}
                    onMouseLeave={() => handleMouseLeave()}
                    backgroundcolor={ postRequisiteIds.includes(String(subject.id)) ? purple : (preRequisiteIds.includes(String(subject.id))? blue : gray) }
                >
                    {width > 1279 ? subject.name : subject.shortName}
                </Wrapper>
            }
        </Container>
  );
};

export default Subject;
