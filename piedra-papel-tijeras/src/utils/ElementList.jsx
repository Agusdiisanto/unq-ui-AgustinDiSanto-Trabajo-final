import { elements } from "../utils/Elements";

const ElementList = ({ selectElemento }) => {
    return (
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
    );
};

export default ElementList;