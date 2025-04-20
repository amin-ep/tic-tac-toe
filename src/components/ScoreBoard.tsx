// import styled from "styled-components";
// import PlayerName from "../ui/PlayerName";
// import { useSelector } from "react-redux";
// import { ReduxStore } from "../store/store";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { newGame, restartGame } from "../store/gameSlice";
import { ReduxStore } from "../store/store";
import Button from "../ui/Button";
import Logo from "./Logo";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-areas: "restart . . . newGame-btn-wrapper" "scores scores scores scores scores";
  align-items: center;

  @media (min-width: 640px) {
    grid-template-areas: "restart scores scores scores newGame-btn-wrapper";
  }
`;

const ScoresContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  grid-area: scores;
`;

const Score = styled.span<{
  turn: string;
  side: "right" | "left";
  variant: "blue" | "yellow";
}>`
  position: relative;
  font-size: 16px;
  color: var(--color-gray-800);
  padding: 8px 16px;
  ${(props) =>
    props.side === "left"
      ? { borderStyle: "none none none solid" }
      : props.side === "right"
      ? { borderStyle: "none solid none none" }
      : ""}

  border-width: 10px;
  border-color: ${(props) =>
    props.variant === "blue"
      ? "var(--color-blue-500)"
      : "var(--color-amber-400)"};
  border-radius: 0.5rem;

  &::after {
    content: "";
    position: absolute;
    width: 6px;
    height: 6px;
    background-color: ${(props) =>
      props.turn === "true" ? "#d40000" : "#ffffff"};

    border-radius: 99px;
    bottom: 2px;
    left: 17.75px;
  }

  @media (min-width: 640px) {
    font-size: 24px;

    &::after {
      left: 20px;
      bottom: 6px;
    }
    border-width: 14px;
  }
`;

const NewGameButtonWrapper = styled.div`
  grid-area: newGame-btn-wrapper;
`;

const RestartGameButtonContainer = styled.div`
  grid-area: restart;
`;

const PlayerName = styled.p`
  font-size: 16px;
  color: var(--color-gray-800);

  @media (min-width: 640px) {
    font-size: 20px;
  }
`;

function ScoreBoard() {
  const [canRestart, setCanRestart] = useState(false);
  const dispatch = useDispatch();
  const { players, draws } = useSelector((state: ReduxStore) => state.game);

  useEffect(() => {
    setCanRestart(players.every((el) => el.wins === 0) && draws === 0);
  }, [draws, players]);

  return (
    <div className="pt-3">
      <Container>
        <RestartGameButtonContainer>
          <Button disabled={canRestart} onClick={() => dispatch(restartGame())}>
            Restart
          </Button>
        </RestartGameButtonContainer>
        <ScoresContainer className="flex items-center justify-center gap-3">
          <PlayerName>{players[0].name}</PlayerName>
          <div className="bg-white shadow-lg rounded-lg flex justify-around items-center gap-3">
            <Score
              variant={players[0].color}
              side="left"
              turn={String(players[0].turn)}
            >
              {players[0].wins}
            </Score>
            <span>-</span>
            <Score
              variant={players[1].color}
              side="right"
              turn={String(players[1].turn)}
            >
              {players[1].wins}
            </Score>
          </div>
          <PlayerName>{players[1].name}</PlayerName>
        </ScoresContainer>
        <NewGameButtonWrapper>
          <Button onClick={() => dispatch(newGame())}>New Game</Button>
        </NewGameButtonWrapper>
      </Container>
      <div className="w-full flex items-center justify-center">
        <Logo />
      </div>
    </div>
  );
}

export default ScoreBoard;
