import { useSelector } from "react-redux";
import { newGame } from "../store/gameSlice";
import { GameDispatch, ReduxStore } from "../store/store";
import { useDispatch } from "react-redux";

function NewGameButton() {
  const { status } = useSelector((state: ReduxStore) => state.game);
  const dispatch: GameDispatch = useDispatch();

  return (
    <button
      className={`${
        status === "started" ? "fixed" : "hidden"
      } bottom-5 right-5 z-50 bg-gray-200 p-3 rounded-md shadow-2xl shadow-stone-900 hover:bg-gray-500 hover:text-white transition-all`}
      onClick={() => dispatch(newGame())}
    >
      New Game
    </button>
  );
}

export default NewGameButton;
