import { useSelector } from "react-redux";
import Header from "./components/Header";
import { ReduxStore } from "./store/store";
import GameFormModal from "./components/GameFormModal";
import Toast from "./components/Toast";
import Board from "./components/Board";

function App() {
  const { gameFormIsOpen } = useSelector((state: ReduxStore) => state.game);
  return (
    <div className="w-[45rem] max-w-[95%] mx-auto">
      <Header />
      <main>
        {gameFormIsOpen && <GameFormModal />}
        <Toast />
        <Board />
      </main>
    </div>
  );
}

export default App;
