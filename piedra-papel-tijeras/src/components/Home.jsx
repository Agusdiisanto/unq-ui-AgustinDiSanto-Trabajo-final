import "./Home.css"
import SinglePlayer from "../img/SinglePlayer.png"
import TwicePlayer from "../img/DosJugadores.png"

const Home = () => {
  return (
    <div className='container-home'>
        <h1 className="container-title">¡Bienvenido!</h1>
        <div className="container">
            <h2>Elige el modo de juego: </h2>
            <div className="container-buttons">
                <div className="container-player">
                    <h3>Un Jugador</h3>
                    <img src={SinglePlayer} alt="foto de singlePlayer" className="container-img"/>
                    <p>VS. Sheldon</p>
                </div>
                <div className="container-player">
                    <h3>Dos Jugadores</h3>
                    <img src={TwicePlayer} alt="foto de singlePlayer"className="container-img" />
                    <p>Localmente</p>
                </div>
            </div>
            <p>¿No conoces las reglas del juego?</p>
        </div>
    </div>
  )
}

export default Home