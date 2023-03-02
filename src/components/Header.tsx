import { useEffect } from "react";

const Header = ({
  handleNewGame,
  wins,
}: {
  handleNewGame: () => void;
  wins: number;
}) => {
  useEffect(() => {
    document.title = `${wins} wins`;
  }, [wins]);

  return (
    <header className="header">
      <h4>wins: {wins}</h4>
      <h3>Memory game for developers</h3>
      <button onClick={handleNewGame}>New Game</button>
    </header>
  );
};

export default Header;
