import { Link } from "react-router-dom";
import "./SheldonVideo.css";

const SheldonVideo = () => {
  return (
    <div className="container-video">
      <div className="video-wrapper">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/S5eLybE03gc"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      <div style={{ paddingTop: "2rem" }}>
        <Link to="/" className="text-link">
          Volver a inicio
        </Link>
      </div>
    </div>
  );
}

export default SheldonVideo;
