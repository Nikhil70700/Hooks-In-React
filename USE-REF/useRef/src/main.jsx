import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './App.css';
import UseRefHook from "./components/UseRefHook";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <UseRefHook /> */}
    <App />
  </StrictMode>,
)
