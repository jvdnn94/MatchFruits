// hooks/UseGameLogic.ts

import { useState } from 'react';
import type { CardType } from '../types/services';

function UseGameLogic(FruitCards:string[]) {
     const [Gamecards, setGameCards] = useState<CardType[]>([]);
  const [FlipedCards, setFlipedCards] = useState<number[]>([]);
  const [MatchCards, setMatchCards] = useState<number[]>([]);
  const [Moves, setMoves] = useState<number>(0);
  const [Score, setScore] = useState<number>(0);
  const [IsLocked, setIsLocked] = useState<boolean>(false);

  const IsCompeleted = MatchCards.length === FruitCards.length;

  const ShuffledArray = (cardValue: string[]): string[] => {
    const shuffled = [...cardValue];

    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;
  };

  

  const initializeGame = () => {
    const ShuffledCards = ShuffledArray(FruitCards);

    const StartGameCards: CardType[] = ShuffledCards.map((value, index) => ({
      id: index,
      value: value,
      isFlipped: false,
      isMatched: false,
    }))

    setGameCards(StartGameCards);
    setMoves(0);
    setScore(0);
    setFlipedCards([]);
    setMatchCards([]);
  };

  
  const ClickCardHandler = (card: CardType) => {
    // جلوگیری از کلیک روی کارت فلپ شده یا مچ شده
    if (card.isFlipped || card.isMatched || IsLocked || FlipedCards.length === 2) return;

    const UpdatedGameCard = Gamecards.map((c) =>
      c.id === card.id ? { ...c, isFlipped: true } : c
    );
    setGameCards(UpdatedGameCard);

    const NewFlipedCards = [...FlipedCards, card.id];
    setFlipedCards(NewFlipedCards);

    //چک کردن مچ بودن دو کارت
    if (FlipedCards.length === 1) {
      setIsLocked(true);
      //اولین کارتی که برگشت خورده
      const FirsFlippedtCards = Gamecards[FlipedCards[0]];
      console.log(FirsFlippedtCards);
      

      if (FirsFlippedtCards.value === card.value) {
        setTimeout(() => {
          setMatchCards((prev) => [...prev, FirsFlippedtCards.id, card.id]);
          setScore((prev) => prev + 1)
          setGameCards((prev) =>
            prev.map((c) => {
              if (c.id === card.id || c.id === FirsFlippedtCards.id) {
                return { ...c, isMatched: true }
              } else {
                return c
              }
            }

            ));
          setFlipedCards([]);
          setIsLocked(false);
        }, 500);
      } else {
        setTimeout(() => {
          const NewFlipedBackCard = Gamecards.map((c) => {
            if (NewFlipedCards.includes(c.id) || c.id === card.id) {
              return { ...c, isFlipped: false }
            } else {
              return c
            }
          });
          setGameCards(NewFlipedBackCard);
          setFlipedCards([]);
          setIsLocked(false);
        }, 1000);

      }
      setMoves((prev) => prev + 1)
    }
  };

 

  return {Moves,Score,Gamecards,IsCompeleted,ClickCardHandler,initializeGame}
}

export default UseGameLogic

