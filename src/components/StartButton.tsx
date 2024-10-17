import styled from "styled-components";
import Modal from "../ui/Modal";
import GameForm from "./GameForm";

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-gap: 1rem;
`;

function StartButton() {
  return (
    <ButtonWrapper>
      <Modal>
        <Modal.Open opens="game">Start Game</Modal.Open>
        <Modal.Content name="game">
          <GameForm />
        </Modal.Content>
      </Modal>
    </ButtonWrapper>
  );
}

export default StartButton;
