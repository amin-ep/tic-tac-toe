import { useSelector } from "react-redux";
import styled from "styled-components";
import { GameDispatch, ReduxStore } from "../store/store";
import { ReactElement, useCallback, useEffect, useState } from "react";
import Cross from "../ui/Cross";
import Circle from "../ui/Circle";
import { useDispatch } from "react-redux";
import { fillLine, ILine } from "../store/gameSlice";
import toast from "react-hot-toast";

const Button = styled.button<{ index: number }>`
  width: 100%;
  aspect-ratio: 1/1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-white);

  border-color: var(--color-gray-100);
  border-radius: ${(props) =>
    props.index === 0
      ? "8px 0 0 0"
      : props.index === 1 ||
        props.index === 4 ||
        props.index === 7 ||
        props.index === 5 ||
        props.index === 3
      ? "0"
      : props.index === 2
      ? "0 8px 0 0"
      : props.index === 6
      ? "0 0 0 8px"
      : props.index === 8
      ? "0 0 8px 0"
      : ""};

  border-style: ${(props) =>
    props.index === 0
      ? "none solid solid none"
      : props.index === 1
      ? "none none solid none"
      : props.index === 2
      ? "none none solid solid"
      : props.index === 3
      ? "none solid solid none"
      : props.index === 4
      ? "none none solid none"
      : props.index === 5
      ? "none none solid solid"
      : props.index === 6
      ? "none solid none none"
      : props.index === 7
      ? "none none none none"
      : props.index === 8
      ? "none none none solid"
      : ""};

  border-width: 2px;
  border-color: var(--color-gray-200);

  &:disabled {
    cursor: not-allowed;
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
        setValue(<Circle />);

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
      index={index}
    >
      {value}
    </Button>
  );
}

export default Square;
