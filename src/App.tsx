import React, { useEffect, useState } from "react";
import shuffle from "./utilities/shuffle";
import Card from "./components/Card";
import CardType from "./shared/interfaces/card";
import Header from "./components/Header";
import "./App.css";
import useAppBadge from "./hooks/useAppBadge";

const App = () => {
  const [cards, setCards] = useState(shuffle);
  const [pickOne, setPickOne] = useState<CardType | null>(null);
  const [pickTwo, setPickTwo] = useState<CardType | null>(null);
  const [readyForPick, setReadyForPick] = useState(true);
  const [wins, setWins] = useState(0);
  const [setBadge, clearBadge] = useAppBadge();

  const handleOnClick = (card: CardType): void => {
    if (readyForPick) {
      pickOne ? setPickTwo(card) : setPickOne(card);
    }
  };

  const handleTurn = (): void => {
    setBadge();
    setPickOne(null);
    setPickTwo(null);
    setReadyForPick(true);
  };

  const handleNewGame = () => {
    clearBadge();
    handleTurn();
    setWins(0);
    setCards(shuffle);
  };

  useEffect(() => {
    let pickTimer: NodeJS.Timeout;

    if (pickOne && pickTwo) {
      if (pickOne.image === pickTwo.image) {
        setCards((previousCards) => {
          return previousCards.map((card) => {
            if (card.image === pickOne.image) {
              return { ...card, matched: true };
            }
            return card;
          });
        });

        handleTurn();
      } else {
        setReadyForPick(false);

        pickTimer = setTimeout(() => {
          handleTurn();
        }, 1000);
      }
    }

    return () => {
      clearTimeout(pickTimer);
    };
  }, [cards, pickOne, pickTwo, wins]);

  useEffect(() => {
    const hasWon = cards.every((card) => card.matched);

    if (hasWon) {
      setWins(wins + 1);
      handleTurn();
      setCards(shuffle);
      setBadge();
    }
  }, [cards, wins, setBadge]);

  return (
    <>
      <Header handleNewGame={handleNewGame} wins={wins} />
      <div className="grid">
        {cards.map((card) => {
          const { image, id, matched } = card;

          return (
            <Card
              key={id}
              id={id}
              image={image}
              matched={matched}
              onClick={() => handleOnClick(card)}
              selected={
                card.id === pickOne?.id || card.id === pickTwo?.id || matched
              }
            />
          );
        })}
      </div>
    </>
  );
};

export default App;
