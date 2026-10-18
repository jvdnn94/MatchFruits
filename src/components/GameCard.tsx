import type {  GameCardProps } from "../types/services";



function GameCard({ card, onClick }: GameCardProps) {
  const handleClick = () => {
    if (card.isFlipped || card.isMatched) return;
    onClick(card);
  };

  return (
    <div
      onClick={handleClick}
      className={`Card py-4 rounded-md font-extrabold text-7xl
        border-gray-800 border-2 cursor-pointer hover:bg-gray-600/50
        ${card.isFlipped ? "Flipped" : ""}
        ${
          card.isMatched
            ? "bg-green-800/50 shadow-2xl border-green-900 border-4"
            : "bg-gray-800/60"
        }`}
    >
      <div className="Card-Front text-amber-50">?</div>
      <div className="Card-Back">{card.value}</div>
    </div>
  );
}

export default GameCard;
