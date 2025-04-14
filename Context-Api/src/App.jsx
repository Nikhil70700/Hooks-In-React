import './App.css'
import { BioProvider } from './Components'
import Home from './Components/Home';

function App() {
  return (
    <BioProvider>
      <Home/>
    </BioProvider>
  );
};

export default App
