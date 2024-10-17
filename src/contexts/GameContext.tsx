import { createContext, ReactNode, useReducer } from "react";

export interface IPlayer {
  name: string;
  color: "blue" | "yellow";
  turn: boolean | null;
  wins: number;
  filledLines: number[];
}

export interface ILine {
  index: number;
  color: IPlayer["color"] | null;
}

interface IGame {
  status: "idle" | "started" | "ended";
  currentMove: 0 | 1 | null;
  players: IPlayer[];
  draws: number;
  lines: ILine[];
}

type ActionTypes =
  | { type: "start"; payload: { player1: string; player2: string } }
  | { type: "fillLine"; payload: { line: number; color: IPlayer["color"] } }
  | { type: "addWins"; payload: { color: IPlayer["color"]; addNumber: number } }
  | { type: "draw" }
  | { type: "restart" }
  | { type: "newGame" };

const GameContext = createContext({});

const reducer = (state: IGame, action: ActionTypes) => {
  switch (action.type) {
    case "start":
      return { ...state, status: "start" };

    case "draw":
      return { ...state, draw: state.draws + 1 };

    case "fillLine":
      return { ...state };
    default:
      throw new Error("Unknown action type");
  }
};

const initialState: IGame = {
  status: "idle",
  players: [
    {
      name: "",
      color: "blue",
      turn: null,
      wins: 0,
      filledLines: [],
    },
    {
      name: "",
      color: "yellow",
      turn: null,
      wins: 0,
      filledLines: [],
    },
  ],
  currentMove: null,
  draws: 0,
  lines: [
    {
      index: 0,
      color: null,
    },
    {
      index: 1,
      color: null,
    },
    {
      index: 2,
      color: null,
    },
    {
      index: 3,
      color: null,
    },
    {
      index: 4,
      color: null,
    },
    {
      index: 5,
      color: null,
    },
    {
      index: 6,
      color: null,
    },
    {
      index: 7,
      color: null,
    },
    {
      index: 8,
      color: null,
    },
  ],
};

export default function GameProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <GameContext.Provider value={{}}>{children}</GameContext.Provider>;
}
