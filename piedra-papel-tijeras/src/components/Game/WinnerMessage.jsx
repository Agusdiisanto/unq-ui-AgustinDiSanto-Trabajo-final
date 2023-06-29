import PropTypes from "prop-types";

const WinnerMessage = ({ winner, playAgain }) => {
  const message = winner === "empate" ? "¡Hay empate!" : `${winner.nombre} ganó!`;

  return (
    <div className="game-container-winner">
      <h3 className="winner-message">{message}</h3>
      <div className="winner-buttons">
        <button className="winner-button" onClick={() => playAgain(true)}>
          Jugar de nuevo
        </button>
        <button className="winner-button" onClick={() => playAgain()}>
          Siguiente
        </button>
      </div>
    </div>
  );
};

WinnerMessage.propTypes = {
  winner: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  playAgain: PropTypes.func,
};

export default WinnerMessage;
