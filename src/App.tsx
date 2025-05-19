import SubjectContextProvider from './contexts/Subject.context';
import { Home } from './pages/Home/Home.page';

function App() {
  return (
    <SubjectContextProvider>
      <Home />
    </SubjectContextProvider>
  );
}

export default App;
