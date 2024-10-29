import { useSelector } from "react-redux";
import Logo from "./Logo";
import StartButton from "./StartButton";
import { GameDispatch, ReduxStore } from "../store/store";
import styled from "styled-components";
import { GrPowerReset } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { restartGame } from "../store/gameSlice";

const StyledButton = styled.button`
  background-color: var(--color-white);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  box-shadow: var(--shadow-1) rgba(255, 255, 255, 0.089);
  padding-inline: 1rem;
  color: #2c2c2c;
  justify-self: center;

  @media (max-width: 730px) {
    justify-self: end;
  }

  &:hover {
    background-color: #e4e4e4;
  }

  &:active {
    transform: translate(0, 10px);
    box-shadow: 0 0 0;
  }
`;

function Header() {
  const { status } = useSelector((state: ReduxStore) => state.game);
  const dispatch: GameDispatch = useDispatch();

  return (
    <header className="grid grid-cols-2 justify-between p-3">
      <Logo />
      {status === "idle" ? (
        <>
          <StartButton />
        </>
      ) : (
        <>
          {status === "ended" && (
            <StyledButton
              className="w-16"
              onClick={() => dispatch(restartGame())}
            >
              <GrPowerReset size={30} />
            </StyledButton>
          )}
        </>
      )}
    </header>
  );
}

export default Header;
