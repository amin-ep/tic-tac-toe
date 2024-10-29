import Board from "./components/Board";
import Header from "./components/Header";
import Toast from "./components/Toast";
import NewGameButton from "./components/NewGameButton";

function App() {
  return (
    <>
      <Toast />
      <Header />
      <Board />
      <NewGameButton />
    </>
  );
}

export default App;
