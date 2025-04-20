import { useCallback, useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addToPlayerWins, drawGame, IPlayer } from "../store/gameSlice";
import { GameDispatch, ReduxStore } from "../store/store";
import Square from "./Square";

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 1rem 0;
`;

const Board = () => {
  const { lines, players, status } = useSelector(
    (state: ReduxStore) => state.game
  );

  const dispatch: GameDispatch = useDispatch();

  const calculateWinner = useCallback((players: IPlayer[]) => {
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
                  ? `linear-gradient(45deg, var(--color-blue-500),var(--color-cyan-300))`
                  : `linear-gradient(135deg, var(--color-orange-600), var(--color-amber-400), var(--color-yellow-300)`,
              color: "var(--color-black)",
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
  }, []);

  useEffect(() => {
    if (status === "started") {
      const winnerPlayer = calculateWinner(players);
      if (
        players[0].filledLines.length + players[1].filledLines.length === 9 &&
        !winnerPlayer
      ) {
        dispatch(drawGame());
      }

      if (winnerPlayer && typeof winnerPlayer === "object") {
        dispatch(addToPlayerWins({ color: winnerPlayer.color }));
      }
    }
  }, [players, dispatch, status, calculateWinner]);

  return (
    <StyledDiv>
      {lines.map((item, index) => (
        <Square key={item.index.toString()} item={item} index={index} />
      ))}
    </StyledDiv>
  );
};

export default Board;
