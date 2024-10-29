import styled from "styled-components";
import PlayerName from "../ui/PlayerName";
import { useSelector } from "react-redux";
import { ReduxStore } from "../store/store";

const Draws = styled.div`
  width: 100%;
  background-color: var(--color-white);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  box-shadow: var(--shadow-1) rgba(255, 255, 255, 0.089);
  padding: 1.3rem;
`;

function ScoreBoard() {
  const { players, draws } = useSelector((state: ReduxStore) => state.game);

  return (
    <>
      <PlayerName player={players[0]} />
      <div className="flex justify-center items-center gap-2">
        {/* {status === "started" && (
          <StyledButton onClick={() => dispatch(newGame())}>
            New Game
          </StyledButton>
        )} */}
        <Draws>Draws: {draws}</Draws>
      </div>
      <PlayerName player={players[1]} />
    </>
  );
}

export default ScoreBoard;
