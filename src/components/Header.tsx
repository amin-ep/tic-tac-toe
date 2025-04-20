import styled from "styled-components";
import Button from "../ui/Button";
import Logo from "./Logo";
import { useDispatch } from "react-redux";
import { openGameForm } from "../store/gameSlice";
import { useSelector } from "react-redux";
import { ReduxStore } from "../store/store";
import ScoreBoard from "./ScoreBoard";

const StartSectionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Heading = styled.h1`
  color: var(--color-gray-500);
  text-align: center;
  display: none;
  font-size: 14px;

  @media (min-width: 425px) {
    display: block;
  }

  @media (min-width: 640px) {
    font-size: 18px;
  }
`;

function Header() {
  const { status } = useSelector((state: ReduxStore) => state.game);
  return (
    <header>{status === "idle" ? <StartSection /> : <ScoreBoard />}</header>
  );
}

function StartSection() {
  const dispatch = useDispatch();

  return (
    <StartSectionContainer>
      <Button onClick={() => dispatch(openGameForm())}>Play</Button>
      <Heading>Enjoy With Your Friends</Heading>
      <Logo />
    </StartSectionContainer>
  );
}

export default Header;
