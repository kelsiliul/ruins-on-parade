import { useState } from 'react';
import LandingPage from './components/LandingPage';
import CarnivalMapPage from './components/CarnivalMapPage';

function App() {
  const [entered, setEntered] = useState(false);
  return entered ? <CarnivalMapPage /> : <LandingPage onEnter={() => setEntered(true)} />;
}

export default App;
