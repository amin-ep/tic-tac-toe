/* eslint-disable @typescript-eslint/ban-ts-comment */
import Input from "../ui/Input";
import FormRow from "../ui/FormRow";
import styled from "styled-components";
import Form from "../ui/Form";
import Button from "../ui/Button";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { GameDispatch } from "../store/store";
import { startGame } from "../store/gameSlice";
import toast from "react-hot-toast";

interface IData {
  player1: string;
  player2: string;
}

const FormContainer = styled.div`
  padding: 1rem;
  width: 30rem;
  max-width: 100%;
`;

function GameForm() {
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
  };

  const inputErrorMessages: { min: string; max: string; required: string } = {
    min: "Name Should be equal or more than 3",
    max: "Name should be equal or less than 25",
    required: "This field is required",
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit(formSubmit)}>
        <FormRow label="Player 1" id="player1" errors={errors.player1?.message}>
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
        <FormRow label="Player 2" id="player2" errors={errors.player2?.message}>
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
          <Button extraStyles="rounded-md" type="submit">
            StartGame
          </Button>
        </FormRow>
      </Form>
    </FormContainer>
  );
}

export default GameForm;
