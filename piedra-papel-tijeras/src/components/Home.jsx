import "./Home.css"


const Home = () => {
  return (
    <div className='container-home'>
        <h1 className="container-title">¡Bienvenido!</h1>
        <div>
            <h2>Elige el modo de juego: </h2>
            <div className="container-game">
                <div>
                    <h3>Un Jugador</h3>
                    <p>VS. Sheldon</p>
                </div>
                <div>
                    <h3>Dos Jugadores</h3>
                    <p>Localmente</p>
                </div>
            </div>
            <p>¿No conoces las reglas del juego?</p>
        </div>
    </div>
  )
}

export default Home