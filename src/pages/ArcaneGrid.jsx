import { useEffect, useState } from "react";
import { getAllCards } from "../services/tarotService";
import CardList from "../components/CardList";
import "./ArcaneGrid.css";

export default function ArcaneGrid() {
  const [allCards, setAllCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        setLoading(true);
        const data = await getAllCards();
        setAllCards(data);
      } catch (err) {
        setError('Error al cargar las cartas. Por favor, inténtalo de nuevo.');
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  if (loading) {
    return (
      <main className="grid-container">
        <div className="grid-header">
          <div className="grid-header-line grid-header-line-left"></div>
          <h1 className="grid-title">ARCANOS</h1>
          <div className="grid-header-line grid-header-line-right"></div>
        </div>
        <div className="grid-loading">
          <div className="grid-loading-content">
            <div className="grid-spinner"></div>
            <p className="grid-loading-text">Cargando cartas del tarot...</p>
          </div>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="grid-container">
        <div className="grid-header">
          <div className="grid-header-line grid-header-line-left"></div>
          <h1 className="grid-title">ARCANOS</h1>
          <div className="grid-header-line grid-header-line-right"></div>
        </div>
        <div className="grid-error">
          <div className="grid-error-content">
            <p className="grid-error-text">{error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="grid-error-button"
            >
              Reintentar
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="grid-container">
      <div className="grid-header">
        <div className="grid-header-line grid-header-line-left"></div>
        <h1 className="grid-title">ARCANOS</h1>
        <div className="grid-header-line grid-header-line-right"></div>
      </div>
      
      <div className="grid-description">
        <p className="grid-description-primary">
          En este mazo singular, los antiguos arcanos del tarot adquieren una nueva luz.
          <br/>
          Cada carta esconde el rostro de una científica que, con su trabajo, desvelaron los auténticos misterios de la existencia.
        </p>
      </div>

      {allCards.length > 0 ? (
        <CardList cards={allCards} />
      ) : (
        <div className="grid-empty">
          <p className="grid-empty-text">No se encontraron cartas</p>
        </div>
      )}
    </main>
  );
}