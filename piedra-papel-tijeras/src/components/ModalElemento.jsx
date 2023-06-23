import {elements} from "../utils/Elements"
import "./ModalElemento.css"

const ModalElemento = ({setShowModal}) => {

  const onCloseModal = () =>{
    setShowModal(false)
  } 

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="container-elements">
          {elements.map((element) => 
            <button onClick = {onCloseModal} className="elements-style elements-position"key={element.name}>
              <p className="element-emoji">{element.emoji}</p>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ModalElemento