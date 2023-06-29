import classNames from "classnames";
import PropTypes from "prop-types";

const Player = ({ player, openModal, isFirstPlayer, win }) => {
  
  const playerButtonClass = classNames({
    "button-static": player.currentChoice || win,
    "button-style": !player.currentChoice && !win,
    "effect-winner": win && player.winner,
    "effect-loser": win && !player.winner,
  });

  return (
    <div className="container-player">
      <h3 className={isFirstPlayer ? "title-1" : "title-2"}>{player.name}</h3>
      <button
        className={playerButtonClass}
        onClick={() => openModal(isFirstPlayer ? "first" : "")}
      >
        {win && player.currentChoice && player.currentChoice.emoji}
        {!win && player.currentChoice && "..."}
        {!win && !player.currentChoice && "?"}
      </button>
      <p className="score-text">Score: {player.score}</p>
    </div>
  );
};

Player.propTypes = {
  player: PropTypes.shape({
    name: PropTypes.string.isRequired,
    currentChoice: PropTypes.shape({
      nombre: PropTypes.string.isRequired,
      emoji: PropTypes.string.isRequired,
    }),
    score: PropTypes.number.isRequired,
    winner: PropTypes.bool.isRequired,
  }),
  openModal: PropTypes.func.isRequired,
  isFirstPlayer: PropTypes.bool.isRequired,
  win: PropTypes.bool.isRequired,
};

export default Player;
