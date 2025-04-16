import { DarkLight, ThemeProvider } from "./Components/ThemeSwitchDarkLight/Theme";
import './App.css';


function App() {
  return (
    <>
      <ThemeProvider>
        <DarkLight/>
      </ThemeProvider>
    </>
  );
};

export default App
