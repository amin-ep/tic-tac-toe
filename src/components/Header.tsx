import { useSelector } from "react-redux";
import Logo from "./Logo";
import StartButton from "./StartButton";
import { ReduxStore } from "../store/store";
import ScoreBoard from "./ScoreBoard";

function Header() {
  const { status } = useSelector((state: ReduxStore) => state.game);

  return (
    <header
      className={`p-4 grid ${
        status === "idle" ? "grid-cols-2" : "grid-cols-3"
      }`}
    >
      {status === "idle" ? (
        <>
          <Logo />
          <StartButton />
        </>
      ) : (
        <>
          <ScoreBoard />
        </>
      )}
    </header>
  );
}

export default Header;
