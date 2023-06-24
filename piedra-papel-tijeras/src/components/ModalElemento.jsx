import {elements} from "../utils/Elements"
import "./ModalElemento.css"

const ModalElemento = ({player,setPlayer,setShowModal}) => {

  const selectElemento = (element) =>{
    setPlayer({ ...player, currentChoice: element });
    setShowModal(false)
  } 

  return (
    <>
      {player.currentChoice === null && (
        <div className="animate__animated animate__pulse modal-overlay">
          <div className="modal">
            <div className="container-elements">
              {elements.map((element) => (
                <button
                  onClick={() => selectElemento(element)}
                  className="elements-style elements-position"
                  key={element.name}
                >
                  <p className="element-emoji">{element.emoji}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ModalElemento