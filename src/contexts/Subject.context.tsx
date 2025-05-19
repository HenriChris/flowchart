import React, { useContext, useEffect, useState } from "react";
import { createContext } from 'react';

type SubjectType = {
  subjectId: string,
  preRequisiteIds: string[]
  postRequisiteIds: string[]
} | null;

type SubjectContextProviderProps = {
  children: React.ReactNode;
};

type SubjectContextProps = {
  currentSubject: SubjectType,
  setCurrentSubject: React.Dispatch<React.SetStateAction<SubjectType>>,
  completedSubjectIds: string[],
  setCompletedSubjectIds: React.Dispatch<React.SetStateAction<string[]>>,
  selectedElectives: { [key: string]: string },
  setSelectedElectives: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>,
  darkMode: "light" | "dark",
  setDarkMode: React.Dispatch<React.SetStateAction<"light" | "dark">>,
}

export const SubjectContext = createContext<SubjectContextProps | null>(null);

export default function SubjectContextProvider({ children }: SubjectContextProviderProps) {

  const [currentSubject, setCurrentSubject] = useState<SubjectType>(null);
  const [selectedElectives, setSelectedElectives] = useState<{ [key: string]: string }>({});
  const [completedSubjectIds, setCompletedSubjectIds] = useState<string[]>([]);
  const [darkMode, setDarkMode] = useState<"light" | "dark">("light");

  useEffect(() => {
    const completed = JSON.parse(localStorage.getItem('completed') || '[]');
    const darkMode = JSON.parse(localStorage.getItem('darkMode') || JSON.stringify('light'));
    const electives = JSON.parse(localStorage.getItem('electives') || '{}');
    if (completed)
      setCompletedSubjectIds(completed);
    if (darkMode)
      setDarkMode(darkMode);
    if (electives)
      setSelectedElectives(electives);
  }, []);

  return (
    <SubjectContext.Provider
      value={{
        currentSubject,
        setCurrentSubject,
        completedSubjectIds,
        setCompletedSubjectIds,
        selectedElectives,
        setSelectedElectives,
        darkMode,
        setDarkMode,
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