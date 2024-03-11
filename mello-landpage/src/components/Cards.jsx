import Card from "./Card";
import "./Cards.css";

const Cards = () => {
  return (
    <div>
      <Card title="Configuração" img="card-config" />
      <Card title="Otimização" img="card-optimization" />
      <Card title="Acompanhamento" img="card-follow-up" />
      <Card title="Feedback" img="card-feedback" />
    </div>
  );
};

export default Cards;
