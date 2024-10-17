export const BASE_URL = "http://localhost:3000/api";
import toast from "react-hot-toast";
import { IPlayer } from "../store/gameSlice";

export const calculateWinner = (players: IPlayer[]) => {
  const winningLines = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
  ];

  const currentPlayer = players.find((player) => player.turn === false);
  const lastPlayerFilledLines = currentPlayer?.filledLines;
  let winner: IPlayer | null = null;

  if (lastPlayerFilledLines && lastPlayerFilledLines.length >= 3) {
    for (let i = 0; i < winningLines.length; i++) {
      const winLine: number[] = winningLines[i];

      const isWinningLine = winLine.every((square) =>
        lastPlayerFilledLines.includes(square)
      );

      if (isWinningLine) {
        winner = currentPlayer;
        toast(`${currentPlayer.name} won!`, {
          style: {
            background:
              currentPlayer.color === "blue"
                ? `var(--color-sky)`
                : `var(--color-gold-100)`,
          },
        });
      }
    }
  }

  if (
    winner === null &&
    players[1].filledLines.length + players[0].filledLines.length === 9
  ) {
    toast("no one won!");
  }

  return winner;
};
