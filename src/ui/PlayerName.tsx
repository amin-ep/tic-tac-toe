import styled from "styled-components";
import { IPlayer } from "../store/gameSlice";

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-self: center;
  gap: 0.95rem;
  border-right: 1px solid var(--color-gray);
  height: max-content;
  width: 100%;
  border-radius: 6px;
  padding: 1rem;
  box-shadow: ${(props) => (props.turn === true ? "var(--shadow-1)" : "0 0 0")};
  ${(props) =>
    props.color === "blue"
      ? ` rgba(3, 4, 5, 0.4)`
      : props.color === "yellow"
      ? `rgba(5, 5, 3, 0.4)`
      : ""};

  background: ${(props) =>
    props.color == "blue"
      ? `var(--color-sky)`
      : props.color === "yellow"
      ? `var(--color-gold-100)`
      : ""};

  transition: 0.5s all;
`;

function PlayerName({ player }: { player: IPlayer }) {
  return (
    <StyledDiv color={player.color} turn={player.turn}>
      {player.name}
      <span className="text-3xl">{player.wins}</span>
    </StyledDiv>
  );
}

export default PlayerName;
