import React, { useContext, useEffect, useState } from "react";
import { createContext } from 'react';

type SubjectContextProviderProps = {
    children: React.ReactNode;
};

type SubjectContextProps = {
    preRequisiteIds : string[],
    setPreRequisiteIds : React.Dispatch<React.SetStateAction<string[]>>,
    postRequisiteIds : string[],
    setPostRequisiteIds : React.Dispatch<React.SetStateAction<string[]>>,
    currentSubject : number,
    setCurrentSubject : React.Dispatch<React.SetStateAction<number>>,
    completed : number[],
    setCompleted : React.Dispatch<React.SetStateAction<number[]>>,
}

export const SubjectContext = createContext<SubjectContextProps | null>(null);

export default function SubjectContextProvider({ children } : SubjectContextProviderProps) {

    const [preRequisiteIds, setPreRequisiteIds] = useState<string[]>([]);
    const [postRequisiteIds, setPostRequisiteIds] = useState<string[]>([]);
    const [currentSubject, setCurrentSubject] = useState<number>(0);
    const [completed, setCompleted] = useState<number[]>(
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    );

    useEffect(() => {
        const completed = JSON.parse(localStorage.getItem('newCompleted') || '[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]');
        if (completed) {
         setCompleted(completed);
        }
      }, []);
    
    return (
        <SubjectContext.Provider
            value={{
                preRequisiteIds,
                setPreRequisiteIds,
                postRequisiteIds,
                setPostRequisiteIds,
                currentSubject,
                setCurrentSubject,
                completed,
                setCompleted
            }}>
            {children}
        </SubjectContext.Provider>
    )
}

export function useSubjectContext() {
    const context = useContext(SubjectContext);
    if (!context) {
        throw new Error("Context Issues");
    }
    return context;
}