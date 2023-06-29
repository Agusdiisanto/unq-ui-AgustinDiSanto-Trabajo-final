import ModalElemento from "../ModalElemento"
import Player from "./Player";
import WinnerMessage from "./WinnerMessage";
import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom";
import {randomOption} from "../../utils/randomOption"
import { calculateWinner } from "../../utils/CalculateWinner";
import "./Game.css"

const Game = () => {
    
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const singlePlayer = queryParams.get("singlePlayer") === "true";
  const IAOption = singlePlayer ? randomOption() : null;

  const [showModal, setShowModal] = useState(false);
  const [winner, setWinner] = useState(null);
  const [activePlayer, setActivePlayer] = useState(null);

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
        <Player
          player={firstPlayer}
          openModal={openModal}
          isFirstPlayer={true}
          win = {winner}
        />
        <div>
          <Link to="/">
            <button className="inicio-button">Inicio</button>
          </Link>
        </div>
        <Player
          player={secondPlayer}
          openModal={openModal}
          isFirstPlayer={false}
          win = {winner}
        />
      </div>
      {winner && <WinnerMessage winner={winner} playAgain={playAgain} />}
    </div>
  );
};
  


export default Game;