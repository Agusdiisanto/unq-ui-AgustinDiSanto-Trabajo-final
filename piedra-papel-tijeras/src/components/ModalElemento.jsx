import PropTypes from "prop-types";
import "./ModalElemento.css";
import ElementList from "../utils/ElementList";

const ModalElemento = ({ player, setPlayer, setShowModal }) => {
  const selectElemento = (element) => {
    setPlayer({ ...player, currentChoice: element });
    setShowModal(false);
  };

  return (
    <>
      {player.currentChoice === null && (
        <div className="animate__animated animate__pulse modal-overlay">
          <div className="modal">
            <ElementList selectElemento={selectElemento} />
          </div>
        </div>
      )}
    </>
  );
};

ModalElemento.propTypes = {
  player: PropTypes.shape({
    currentChoice: PropTypes.shape({
      nombre: PropTypes.string.isRequired,
      emoji: PropTypes.string.isRequired,
    }),
  }).isRequired,
  setPlayer: PropTypes.func.isRequired,
  setShowModal: PropTypes.func.isRequired,
};

export default ModalElemento;

