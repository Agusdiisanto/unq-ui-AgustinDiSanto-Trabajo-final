import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'

import Home from "./components/Home";
import Rules from "./components/Rules"
import SheldonVideo from "./components/SheldonVideo";

function App() {

  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Home/>}/>
        <Route path="/rules" element={<Rules />} />
        <Route path="/sheldon" element={<SheldonVideo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
