import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'

// Componentes - Inicio
import Home from "./components/Home";
import Rules from "./components/rules/Rules"
// Video de Sheldon monstrando el juego
import SheldonVideo from "./components/rules/SheldonVideo";
// Juego
import Game from "./components/Game";

function App() {

  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Home/>}/>
        <Route path="/rules" element={<Rules />} />
        <Route path="/sheldon" element={<SheldonVideo />} />
        <Route path="/game" element={<Game/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
