import ModalElemento from "./ModalElemento"
import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom";
import {randomOption} from "../utils/randomOption"
import { calculateWinner } from "../utils/CalculateWinner";
import "./Game.css"
const Game = () => {

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const singlePlayer = queryParams.get("singlePlayer") === "true" ? true : false;
    const shaldonOption = singlePlayer ? randomOption() : null;
    
    const [firstPlayer,setFirstPlayer] = useState({
        name:"Jugador 1",
        currentChoice: null,
        score: 0,
        winner: false,
    })

    const [secondPlayer,setSecondPlayer] = useState({
        name: singlePlayer ? "Sheldon" : "Jugador 2 ",
        currentChoice: shaldonOption,
        score: 0,
        winner: false,
    })

    const [showModal,setShowModal]  = useState(false)
    const [winner, setWinner] = useState(null);
    const [activePlayer, setActivePlayer] = useState(null);
    
    useEffect(() => {
        if (firstPlayer.currentChoice && secondPlayer.currentChoice) {
          setTimeout(() => {
            const winner = calculateWinner(
              firstPlayer.currentChoice,
              secondPlayer.currentChoice
            );
            setWinner(winner);
            if (winner.nombre === firstPlayer.currentChoice.nombre) {
              setFirstPlayer({
                ...firstPlayer,
                score: firstPlayer.score + 1,
                isCurrentWinner: true,
              });

            }
            if (winner.nombre === secondPlayer.currentChoice.nombre) {
              setSecondPlayer({
                ...secondPlayer,
                score: secondPlayer.score + 1,
                isCurrentWinner: true,
              });
            }
          }, 1000);
        }
    }, [firstPlayer.currentChoice, secondPlayer.currentChoice]);

    const playAgain = (isNewGame = false) => {
        setWinner(null);
        setFirstPlayer({
            ...firstPlayer,
            currentChoice: null,
            score: isNewGame ? 0 : firstPlayer.score,
            isCurrentWinner: false,
        });
        setSecondPlayer({
            ...secondPlayer,
            currentChoice: shaldonOption,
            score: isNewGame ? 0 : secondPlayer.score,
            isCurrentWinner: false,
        });
    }; 
    const openModalSinglePlayer = () =>{
        setActivePlayer("first")
        setShowModal(true)
    }

    const openModalTwoPlayer = () =>{
        setActivePlayer("")
        setShowModal(true)
    }


  return (
    <div className="container-home">
        {showModal && (
            <ModalElemento
                player={activePlayer === "first" ? firstPlayer : secondPlayer}
                setPlayer={activePlayer === "first" ? setFirstPlayer : setSecondPlayer}
                setShowModal={setShowModal}
            />
        )}
        <h1 className="container-title">Game</h1>
        <div className="container-game">
            <div>
                <h3 className="title-1">{firstPlayer.name}</h3>
                <button className={firstPlayer.currentChoice !== null ? "button-static" : "button-style"}
                        onClick={openModalSinglePlayer}>
                            {winner ? (firstPlayer.currentChoice.emoji) : (firstPlayer.currentChoice ? "..." : "?") }
                </button>
                <p className="score-text">Score : {firstPlayer.score}</p>
            </div>
            <div>
                 <Link to= "/">
                <button className="inicio-button">Inicio</button>
                </Link>              
            </div>
            <div>
                <h3 className="title-2">{secondPlayer.name}</h3>
                <button className={singlePlayer || secondPlayer.currentChoice !== null ? "button-static" : "button-style"} 
                        onClick={!singlePlayer ? openModalTwoPlayer : null}>
                            
                            {winner ? (secondPlayer.currentChoice.emoji) : (secondPlayer.currentChoice ? "..." : "?") }

                        </button>
                <p className="score-text">Score : {secondPlayer.score}</p>
            </div>
        </div>
        {winner && (
            <div className="game-container-winner">
                <h3 className="winner-message">{winner === "empate" ? "¡Hay empate!" : `${winner.nombre} ganó!`}</h3>
                <div className="winner-buttons">
                    <button className="winner-button" onClick={() => playAgain(true)}>
                        Jugar de nuevo
                    </button>
                    <button className="winner-button" onClick={() => playAgain()}>
                        Siguiente
                    </button>
                </div>
          </div>
        )}
    </div>
  )
}

export default Game