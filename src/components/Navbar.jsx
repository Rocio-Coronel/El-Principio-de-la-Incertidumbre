import { Link } from "react-router-dom";
import "./Navbar.css";
import crystalBall from "../assets/img/cristalball.png";

export default function Navbar() {
  return (
    <nav className="navbar-container">
      <div className="navbar-content">
        <div className="navbar-left">
          <img 
            src={crystalBall} 
            alt="Crystal Ball" 
            className="navbar-crystal"
          />
        </div>
        
        <h1 className="navbar-title">
          <Link to="/">El Principio De La Incertidumbre</Link>
        </h1>  
        
        <div className="navbar-right">
          <img 
            src={crystalBall} 
            alt="Crystal Ball" 
            className="navbar-crystal navbar-crystal-right"
          />
        </div>
      </div>
    </nav>
  );
}