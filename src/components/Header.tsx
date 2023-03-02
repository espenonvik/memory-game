import { useEffect } from "react";

const Header = ({
  handleNewGame,
  wins,
}: {
  handleNewGame: () => void;
  wins: number;
}) => {
  useEffect(() => {
    document.title = `Memento - ${wins} wins`;
  }, [wins]);

  return (
    <header className="header">
      <h4>Wins: {wins}</h4>
      <h3>Memento 🔥</h3>
      <button onClick={handleNewGame}>Reset wins</button>
    </header>
  );
};

export default Header;
