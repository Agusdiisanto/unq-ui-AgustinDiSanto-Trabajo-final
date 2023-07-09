import { Link } from "react-router-dom";

const SheldonVideo = () => {
  return (
   <div className="container-home">
   <iframe width="1000" height="700" src="https://www.youtube.com/embed/S5eLybE03gc" title="YouTube video player" 
   frameBorder="0" 
   allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
   gyroscope; picture-in-picture; web-share" allowfullscreen>
   </iframe>
    <div style={{paddingTop: "2rem"}}>
      <Link to="/" className="text-link">Volver a inicio</Link>
    </div>
  </div>
  )
}

export default SheldonVideo