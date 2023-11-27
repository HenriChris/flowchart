import React from 'react';
import Home from './Pages/Home';
import SubjectContextProvider from './Contexts/PreRequesites';

function App() {
  return (
    <SubjectContextProvider>
      <Home/>
    </SubjectContextProvider>
  );
}

export default App;
