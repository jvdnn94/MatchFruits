import ContainerComp from './components/ContainerComp';
import GameCard from './components/GameCard';
import GameHeader from './components/GameHeader';
import WinComp from './components/WinComp';
import UseGameLogic from './hooks/UseGameLogic';
import { useEffect } from 'react';
import './App.css';


function App() {
  const FruitCards: string[] = [
    "🍎", "🍌", "🍊", "🍇", "🍓", "🍍", "🍉", "🥝",
    "🍎", "🍌", "🍊", "🍇", "🍓", "🍍", "🍉", "🥝"
  ];

  //  
  const { ClickCardHandler, Gamecards, Moves, Score, initializeGame, IsCompeleted } = UseGameLogic(FruitCards)
  useEffect(() => {
    initializeGame();
  }, []);
  return (
    <ContainerComp>
      <div className="flex flex-col">
        <GameHeader score={Score} moves={Moves} ResetFunc={initializeGame} />
        {IsCompeleted && <WinComp
          moves={Moves}
          onClose={() => {
            initializeGame();
          }}
        />}
        <div className="bg-gray-600/50 mt-4 rounded-md grid grid-cols-4 gap-2">
          {Gamecards.map((card) => (
            <GameCard
              key={card.id}
              card={card}
              onClick={() => ClickCardHandler(card)}
            />
          ))}
        </div>
      </div>
    </ContainerComp>
  );
}

export default App;
