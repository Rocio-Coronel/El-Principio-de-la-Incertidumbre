import { Link } from "react-router-dom";
import crystalBall from "../assets/img/cristalball.png";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-content">

        <h1 className="home-title">
          El Principio De La Incertidumbre
        </h1>


        <div className="home-divider-top"></div>

        <p className="home-subtitle">
          El conocimiento es poder. Haz tus propios descubrimientos
        </p>

        <div className="home-divider-bottom"></div>


        <div className="home-crystal-section">

          <img 
            src={crystalBall} 
            alt="Bola de cristal" 
            className="home-crystal-ball home-crystal-left"
          />


          <Link to="/cards">
            <button className="home-cta-button">
              Entrar
            </button>
          </Link>

          <img 
            src={crystalBall} 
            alt="Bola de cristal" 
            className="home-crystal-ball home-crystal-right"
          />
        </div>
      </div>
    </div>
  );
}