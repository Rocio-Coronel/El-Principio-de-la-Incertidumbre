import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getCardById } from "../services/tarotService";
import "./ArcaneDetail.css";

export default function ArcaneDetail() {
  const { id } = useParams();
  const [card, setCard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCard = async () => {
      try {
        setLoading(true);
        const cardData = await getCardById(id);
        setCard(cardData);
      } catch (err) {
        setError("Error al cargar los detalles de la carta");
        console.error("Error:", err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchCard();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="detail-loading">
        <div className="detail-loading-content">
          <div className="detail-spinner"></div>
          <p className="detail-loading-text">
            Cargando carta...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="detail-error">
        <div className="detail-error-content">
          <p className="detail-error-text">
            {error}
          </p>
          <Link
            to="/grid"
            className="detail-error-button"
          >
            Volver a las cartas
          </Link>
        </div>
      </div>
    );
  }

  if (!card) {
    return (
      <div className="detail-not-found">
        <div className="detail-not-found-content">
          <p className="detail-not-found-text">
            Carta no encontrada
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="detail-container">
      <div className="detail-wrapper">
    
        <Link to="/cards" className="detail-back-link">
          ← Volver Atrás
        </Link>

        <div className="detail-grid">
 
          <div className="detail-info-section">

            <div className="detail-arcane-container">
              <h1 className="detail-arcane-title">
                Arcano {card.arcaneNumber} - {card.arcaneName}
              </h1>
              <div className="detail-arcane-info">
                <p className="detail-arcane-description">
                  {card.arcaneDescription}
                </p>
              </div>
            </div>

            <div className="detail-goddess-container">
              <h2 className="detail-goddess-title">
                Diosa Asociada: {card.goddessName}
              </h2>
              <div className="detail-goddess-card">
                <div className="detail-goddess-content">
                  <img
                    src={card.goddessImage.imageSrc}
                    alt={card.goddessName}
                    className="detail-goddess-image"
                  />
                  <div className="detail-goddess-description-wrapper">
                    <p className="detail-goddess-description">
                      {card.goddessDescription}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="detail-image-section">
            <div className="detail-image-card">
              <img
                src={card.arcaneImage.imageSrc}
                alt={card.arcaneName}
                className="detail-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}