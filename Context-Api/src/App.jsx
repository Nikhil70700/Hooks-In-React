import './App.css'
import { BioProvider } from './Components'
import About from './Components/About';
import Home from './Components/Home';
import Services from './Components/Services';

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
