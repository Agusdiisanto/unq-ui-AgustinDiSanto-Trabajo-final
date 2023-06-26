import { Link } from "react-router-dom";
import reglas from "../../img/rules.png"
import "./Rules.css"

const Rules = () => {
  return (
    <div className="container-home">
        <div className="container-home-rules">
            <h1 className="rules-title">Piedra, Papel, Tijera, Lagarto, Spock</h1>
            <div className="rules-description">
                <img src={reglas} alt="Reglas" className="rules-img" />
                <div className="rules-description-text">
                    <p>
                      Las reglas son simples... <br/>
                      Tijera corta a Papel <br/>
                      Papel tapa a Piedra <br/>
                      Piedra aplasta a Lagarto <br/>
                      Lagarto envenena a Spock <br/>
                      Spock rompe a Tijera <br/>
                      Tijera decapita a Lagarto <br/>
                      Lagarto devora a Papel <br/>
                      Papel desautoriza a Spock <br/>
                      Spock vaporiza a Piedra <br/>
                      y como siempre, Piedra aplasta a Tijera <br/>
                    </p>
                    <Link to="/sheldon" className="text-link">
                      Explicacion de Sheldon
                    </Link>
                </div>
            </div>
        </div>
        <div className="go-back">
        <Link to="/" className="text-link">Volver a inicio </Link>
        </div>
    </div>
  )
}

export default Rules