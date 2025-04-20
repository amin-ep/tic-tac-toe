import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { GameDispatch } from "../store/store";
import { useForm } from "react-hook-form";
import { closeGameForm, startGame } from "../store/gameSlice";
import toast from "react-hot-toast";
import FormRow from "../ui/FormRow";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Logo from "./Logo";

interface IData {
  player1: string;
  player2: string;
}

const Overlay = styled.div`
  background: transparent;
  backdrop-filter: blur(5px);
  overflow-y: auto;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 1000;
  animation: blur 0.7s;

  @keyframes blur {
    from {
      backdrop-filter: blur(0);
    }
    to {
      backdrop-filter: blur(5px);
    }
  }
`;

const StyledModal = styled.div`
  background-color: var(--color-navy-950);
  transition: all 0.5s;
  box-shadow: var(--shadow-lg);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  z-index: 1001;
  position: fixed;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  width: min-content;
  padding: 0;

  width: 25rem;
  max-width: 95%;

  background: var(--color-white);
  box-shadow: 0 8px 16px 2px rgba(0, 0, 0, 0.1);

  animation: fadeOn 0.7s;

  @keyframes fadeOn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: auto;
  grid-row-gap: 0.75rem;
  width: 100%;

  max-width: 100%;
  padding: 1rem;

  @media (min-width: 768px) {
    gap: 1rem;
  }
`;

function GameFormModal() {
  const dispatch: GameDispatch = useDispatch();

  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { player1: "Player 1", player2: "Player 2" },
  });

  const formSubmit = (data?: IData) => {
    if (Object.is(errors, {})) {
      return;
    }
    dispatch(startGame(data!));
    toast.success("Game started");
    dispatch(closeGameForm());
  };

  const inputErrorMessages: { min: string; max: string; required: string } = {
    min: "Name Should be equal or more than 3",
    max: "Name should be equal or less than 25",
    required: "This field is required",
  };

  const onCloseForm = () => dispatch(closeGameForm());

  return createPortal(
    <Overlay>
      <StyledModal>
        <div className="flex items-center justify-center relative">
          <button
            className="absolute text-lg xs:text-xl sm:text-2xl text-gray-800 left-2 top-2"
            onClick={onCloseForm}
          >
            <HiXMark />
          </button>
          <Logo />
        </div>
        <h2 className="text-center text-gray-500 italic text-sm md:text-base">
          Choose Player Names
        </h2>
        <Form onSubmit={handleSubmit(formSubmit)}>
          <FormRow
            label="Player 1"
            id="player1"
            errors={errors.player1?.message}
          >
            <Input
              type="text"
              id="player1"
              {...register("player1", {
                required: {
                  value: true,
                  message: inputErrorMessages.required,
                },
                minLength: {
                  value: 3,
                  message: inputErrorMessages.min,
                },
                maxLength: {
                  value: 25,
                  message: inputErrorMessages.max,
                },
                validate: (value) =>
                  value !== getValues().player2 ||
                  "Player1 should be different with Player2",
              })}
            />
          </FormRow>
          <FormRow
            label="Player 2"
            id="player2"
            errors={errors.player2?.message}
          >
            <Input
              type="text"
              id="player2"
              {...register("player2", {
                required: {
                  value: true,
                  message: inputErrorMessages.required,
                },
                minLength: {
                  value: 3,
                  message: inputErrorMessages.min,
                },
                maxLength: {
                  value: 25,
                  message: inputErrorMessages.max,
                },
                validate: (value) =>
                  value !== getValues().player1 ||
                  "Player2 should be different with Player1",
              })}
            />
          </FormRow>
          <FormRow id="submit">
            <Button type="submit">StartGame</Button>
          </FormRow>
        </Form>
      </StyledModal>
    </Overlay>,
    document.body
  );
}

export default GameFormModal;
