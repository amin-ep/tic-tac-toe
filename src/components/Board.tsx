import { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { ReduxStore, GameDispatch } from "../store/store";
import Square from "./Square";
import { calculateWinner } from "../utils/helpers";
import { drawGame, addToPlayerWins } from "../store/gameSlice";

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(3, auto);
  justify-content: center;
  align-items: center;
  grid-gap: 1rem;
  margin-top: 1rem;
`;

const Board = () => {
  const { lines, players, status } = useSelector(
    (state: ReduxStore) => state.game
  );

  const dispatch: GameDispatch = useDispatch();

  useEffect(() => {
    if (status === "started") {
      const winnerPlayer = calculateWinner(players);
      if (
        players[0].filledLines.length + players[1].filledLines.length === 9 &&
        !winnerPlayer
      ) {
        dispatch(drawGame());
      }
    }
  }, [players, dispatch, status]);

  useEffect(() => {
    if (status === "started") {
      const winnerPlayer = calculateWinner(players);
      if (winnerPlayer && typeof winnerPlayer === "object") {
        dispatch(addToPlayerWins({ color: winnerPlayer.color }));
      }
    }
  }, [players, dispatch, status]);

  return (
    <StyledDiv>
      {lines.map((item, index) => (
        <Square key={item.index.toString()} item={item} index={index} />
      ))}
    </StyledDiv>
  );
};

export default Board;
