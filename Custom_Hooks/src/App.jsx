import './App.css'
import { BioProvider } from './Components/CustomHooks';
import About from './Components/CustomHooks/About';
import Home from './Components/CustomHooks/Home';
import Services from './Components/CustomHooks/Services';

function App() {
  return (
    <>
      <BioProvider>
        
        <Home />
        <About />
        <Services />

      </BioProvider>
    </>
  );
};

export default App
