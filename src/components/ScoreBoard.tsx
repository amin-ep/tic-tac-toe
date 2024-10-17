import styled, { css } from "styled-components";
import PlayerName from "../ui/PlayerName";
import { useSelector, useDispatch } from "react-redux";
import { GameDispatch } from "../store/store";
import { ReduxStore } from "../store/store";
import { GrPowerReset } from "react-icons/gr";
import { newGame, restartGame } from "../store/gameSlice";

const BasicStyle = css`
  background-color: var(--color-white);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  box-shadow: var(--shadow-1) rgba(255, 255, 255, 0.089);
  padding-inline: 1rem;
`;

const Draws = styled.div`
  width: 160px;
  ${BasicStyle}
`;

const Button = styled.button`
  ${BasicStyle}
  color: #2c2c2c;

  &:hover {
    background-color: #e4e4e4;
  }

  &:active {
    transform: translate(0, 10px);
    box-shadow: 0 0 0;
  }
`;

function ScoreBoard() {
  const { players, draws, status } = useSelector(
    (state: ReduxStore) => state.game
  );
  const dispatch: GameDispatch = useDispatch();

  return (
    <>
      <PlayerName player={players[0]} />
      <div className="flex justify-center items-center gap-2">
        {status === "started" && (
          <Button onClick={() => dispatch(newGame())}>New Game</Button>
        )}
        <Draws>Draws: {draws}</Draws>
        {status === "ended" && (
          <Button className="w-16" onClick={() => dispatch(restartGame())}>
            <GrPowerReset size={30} />
          </Button>
        )}
      </div>
      <PlayerName player={players[1]} />
    </>
  );
}

export default ScoreBoard;
