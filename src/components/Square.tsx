import { useSelector } from "react-redux";
import styled from "styled-components";
import { GameDispatch, ReduxStore } from "../store/store";
import { ReactElement, useCallback, useEffect, useState } from "react";
import Cross from "../ui/Cross";
import Circle from "../ui/Circle";
import { useDispatch } from "react-redux";
import { fillLine, ILine } from "../store/gameSlice";
import toast from "react-hot-toast";

const Button = styled.button`
  width: 12rem;
  height: 11rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-navy-800);
  border-radius: 8px;
  box-shadow: var(--shadow-1) #0e1f29;

  &:disabled {
    cursor: not-allowed;
  }

  @media (max-width: 730px) {
    width: 10rem;
    height: 9rem;
  }

  @media (max-width: 548px) {
    width: 8rem;
    height: 7rem;
  }

  @media (max-width: 438px) {
    width: 6rem;
    height: 5rem;
  }

  @media (max-width: 330px) {
    width: 5.2rem;
    height: 4.2rem;
  }
`;

function Square({ index, item }: { index: number; item: ILine }) {
  const [value, setValue] = useState<ReactElement | null>(null);
  const { players, status, lines } = useSelector(
    (state: ReduxStore) => state.game
  );

  useEffect(() => {
    switch (item?.color) {
      case "blue":
        setValue(<Cross size="small" />);
        break;
      case "yellow":
        setValue(<Circle size="small" />);

        break;
      default:
        setValue(null);
    }
  }, [index, lines, setValue, item]);

  const dispatch: GameDispatch = useDispatch();

  const handleClickSquare = useCallback(() => {
    if (status === "started") {
      const currentPlayer = players.find((player) => player.turn === true);
      dispatch(fillLine({ color: currentPlayer!.color, line: index }));
    } else if (status === "idle") {
      toast.error("The game is not started yet");
    } else if (status === "ended") {
      toast.error("Game is ended!");
    }
  }, [status, players, dispatch, index]);

  return (
    <Button
      disabled={status === "ended" || value !== null}
      onClick={handleClickSquare}
    >
      {value}
    </Button>
  );
}

export default Square;
