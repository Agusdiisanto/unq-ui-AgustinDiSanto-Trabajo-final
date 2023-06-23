import ModalElemento from "./ModalElemento"
import { useState } from "react"
import { Link } from "react-router-dom";
import "./Game.css"

const Game = () => {

    const [firstPlayer,setFirstPlayer] = useState({
        name:"Jugador 1",
        currentChoice: null,
        score: 0,
        winner: false,
    })

    const [secondPlayer,setSecondPlayer] = useState({
        name:"Jugador 2",
        currentChoice: null,
        score: 0,
        winner: false,
    })

    const [showModal,setShowModal]  = useState(false)

  return (
    <div className="container-home">
        {showModal && <ModalElemento/>}
        <h1 className="container-title">Game</h1>
        <div className="container-game">
            <div>
                <h3 className="title-1">{firstPlayer.name}</h3>
                <button className="button-style" onClick={() => setShowModal(true)}>?</button>
                <p className="score-text">Score : {firstPlayer.score}</p>
            </div>
            <div>
                <Link to= "/">
                <button>Inicio</button>
                </Link>              
            </div>
            <div>
                <h3 className="title-2">{secondPlayer.name}</h3>
                <button className="button-style" onClick={() => setShowModal(true)}>?</button>
                <p className="score-text">Score : {secondPlayer.score}</p>
            </div>
            
        </div>
    </div>
  )
}

export default Game