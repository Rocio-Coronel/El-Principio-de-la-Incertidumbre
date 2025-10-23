import { useState } from "react";
import { Link } from "react-router-dom";
import cardBack from "../assets/img/img_cardback.png"; 
import "./Card.css";  

const Card = ({ arcane }) => {

  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = (e) => {

    if (isFlipped) {
      return;
    } else {
      e.preventDefault();
      setIsFlipped(true);
    }
  };

  return (
    <Link to={`/detail/${arcane.id}`} onClick={handleCardClick} className="card-link">
      <div className="card-container">
        <div className="card-image-wrapper">
          <img 
            src={isFlipped ? arcane.arcaneImage.imageSrc : cardBack} 
            alt={isFlipped ? arcane.arcaneName : "Carta del tarot boca abajo"} 
            className="card-image"
          />
        </div>
        {isFlipped && (
          <div className="card-info">
            <h3 className="card-title">{arcane.arcaneName}</h3>
            <p className="card-subtitle">Haz clic para ver más detalles</p>
          </div>
        )}
      </div>
    </Link>
  );
};

export default Card;