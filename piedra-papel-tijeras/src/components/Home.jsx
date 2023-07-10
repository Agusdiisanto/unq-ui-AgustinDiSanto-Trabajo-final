import "./Home.css"
import SinglePlayer from "../img/SinglePlayer.png"
import TwicePlayer from "../img/DosJugadores.png"
import { Link} from "react-router-dom";

const Home = () => {
    
  return (
    <div className='container-home'>
        <h1 className="container-title">¡Bienvenido!</h1>
        <div className="container">
            <h2 className="container-mode-title">Elige el modo de juego: </h2>
            <div className="container-buttons">
                <div className="animate__animated animate__fadeInLeft container-player">
                    <h3 className="title-1">Un Jugador</h3>
                    <Link to="/game?singlePlayer=true">
                    <img src={SinglePlayer} alt="foto de singlePlayer" className="container-img"/>
                    </Link>
                    <p>VS IA</p>
                </div>
                <div className="animate__animated animate__fadeInRight container-player">
                    <h3 className="title-2">Dos Jugadores</h3>
                    <Link to="/game?singlePlayer=false">
                    <img src={TwicePlayer} alt="foto de singlePlayer"className="container-img" />
                    </Link>
                    <p>Localmente</p>
                </div>
            </div>
            <div>
                <Link to="/rules">
                <p className="go-rules">¿No conoces las reglas del juego?</p>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Home