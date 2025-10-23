import Card from "./Card";
import "./CardList.css";

export default function CardList({ cards }) {
  return (
    <div className="card-grid">
      {cards.map((card) => (
        <Card key={card.id} arcane={card} />
      ))}
    </div>
  );
}