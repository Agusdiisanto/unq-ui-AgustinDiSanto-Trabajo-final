import ModalElemento from "./ModalElemento"
import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom";
import {randomOption} from "../utils/randomOption"
import { calculateWinner } from "../utils/CalculateWinner";
import classNames from "classnames";
import "./Game.css"

const Game = () => {

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const singlePlayer = queryParams.get("singlePlayer") === "true" ? true : false;
    const IAOption = singlePlayer ? randomOption() : null;

    const initialPlayerState = {
        name: "",
        currentChoice: null,
        score: 0,
        winner: false,
    };

    const [firstPlayer, setFirstPlayer] = useState({
        ...initialPlayerState,
        name: "Jugador 1",
    });

    const [secondPlayer, setSecondPlayer] = useState({
        ...initialPlayerState,
        name: singlePlayer ? "IA" : "Jugador 2",
        currentChoice: IAOption,
    });

    const [showModal, setShowModal] = useState(false);
    const [winner, setWinner] = useState(null);
    const [activePlayer, setActivePlayer] = useState(null);

    const checkWinner = (player) => {
        if (!firstPlayer.currentChoice || !secondPlayer.currentChoice) {
            return null;
        }
        const winner = calculateWinner(
            firstPlayer.currentChoice,
            secondPlayer.currentChoice
        );
        const isWinner = winner.nombre === player.currentChoice.nombre;
        return isWinner ? player.score + 1 : player.score;
    };

    useEffect(() => {
        if (firstPlayer.currentChoice && secondPlayer.currentChoice) {
        setTimeout(() => {
            const winner = calculateWinner(
                firstPlayer.currentChoice,
                secondPlayer.currentChoice
            );
            setWinner(winner);
            setFirstPlayer((prevPlayer) => ({
                ...prevPlayer,
                score: checkWinner(prevPlayer),
                winner: winner.nombre === prevPlayer.currentChoice.nombre,
            }));
            setSecondPlayer((prevPlayer) => ({
                ...prevPlayer,
                score: checkWinner(prevPlayer),
                winner: winner.nombre === prevPlayer.currentChoice.nombre,
            }));
        }, 1000);
        }
    }, [firstPlayer.currentChoice, secondPlayer.currentChoice]);

    const playAgain = (isNewGame = false) => {
        setWinner(null);
        setFirstPlayer((prevPlayer) => ({
            ...prevPlayer,
            currentChoice: null,
            score: isNewGame ? 0 : prevPlayer.score,
            winner: false,
        }));
        setSecondPlayer((prevPlayer) => ({
            ...prevPlayer,
            currentChoice: IAOption,
            score: isNewGame ? 0 : prevPlayer.score,
            winner: false,
        }));
    };

    const openModal = (activePlayer) => {
        setActivePlayer(activePlayer);
        setShowModal(true);
    };

    const firstPlayerButtonClass = classNames({
        "button-static": firstPlayer.currentChoice,
        "button-style": !firstPlayer.currentChoice && !winner,
        "effect-winner": winner && firstPlayer.winner,
        "effect-loser": winner && !firstPlayer.winner,
    });

    const secondPlayerButtonClass = classNames({
        "button-static": secondPlayer.currentChoice || singlePlayer,
        "button-style": !secondPlayer.currentChoice && !singlePlayer && !winner,
        "effect-winner": winner && secondPlayer.winner,
        "effect-loser": winner && !secondPlayer.winner,
    });
    /* 
        Comentario de Jota : 
            - Intentar minimizar los 3 ifs anidados 
                {
                    winner
                    ? firstPlayer.currentChoice.emoji
                    : firstPlayer.currentChoice
                    ? "..."
                    : "?"
                 }
            - De alguna forma el usuario sabe cuando es jugador 1 y 2
            es decir no lo tengo que especificar yo, entonces cuando el usuario 
                 
            - Intentar extraer funciones y logica en otros componentes 
    */
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
            <div className="container-player">
                <h3 className="title-1">{firstPlayer.name}</h3>
                <button
                    className={firstPlayerButtonClass}
                    onClick={() => openModal("first")}
                >   
                    {winner
                    ? firstPlayer.currentChoice.emoji
                    : firstPlayer.currentChoice
                    ? "..."
                    : "?"}
                </button>
                <p className="score-text">Score: {firstPlayer.score}</p>
            </div>
            <div>
            <Link to="/">
                <button className="inicio-button">Inicio</button>
            </Link>
            </div>
            <div className="container-player">
                <h3 className="title-2">{secondPlayer.name}</h3>
                <button
                    className={secondPlayerButtonClass}
                    onClick={!singlePlayer ? () => openModal("") : null}
                >
                    {winner
                    ? secondPlayer.currentChoice.emoji
                    : secondPlayer.currentChoice
                    ? "..."
                    : "?"}
                </button>
                <p className="score-text">Score: {secondPlayer.score}</p>
            </div>
        </div>
        {winner && (
            <div className="game-container-winner">
            <h3 className="winner-message">
                {winner === "empate" ? "¡Hay empate!" : `${winner.nombre} ganó!`}
            </h3>
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
    );
};

export default Game;