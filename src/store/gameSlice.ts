import { createSlice } from "@reduxjs/toolkit";

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

interface GameState {
  status: "idle" | "started" | "ended";
  players: IPlayer[];
  draws: number;
  lines: ILine[];
  gameFormIsOpen: boolean;
}

const initialState: GameState = {
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
  draws: 0,
  lines: Array(9)
    .fill(null)
    .map((_, index) => ({ index, color: null })),
  gameFormIsOpen: false,
};

const changeTurn = (players: GameState["players"]) => {
  const turnIndex = Math.floor(Math.random() * 2);

  for (let i: number = 0; players.length > i; i++) {
    Object.assign(players[i], {
      turn: i === turnIndex ? true : false,
    });
  }
};

const gameSlice = createSlice({
  name: "game",
  initialState: initialState,
  reducers: {
    startGame: (
      state,
      action: { payload: { player1: string; player2: string } }
    ) => {
      state.status = "started";
      state.players[0].name = action.payload.player1;
      state.players[1].name = action.payload.player2;
      changeTurn(state.players);
    },

    fillLine: (
      state: GameState,
      action: {
        payload: { line: number; color: IPlayer["color"] };
      }
    ) => {
      const movedPlayer = state.players.find(
        (player) => player.color === action.payload.color
      );
      movedPlayer?.filledLines.push(action.payload.line);
      const targetLine = state.lines.find(
        (line) => line.index == action.payload.line
      );

      targetLine!.color = action.payload.color;

      for (let i: number = 0; state.players.length > i; i++) {
        state.players[i].turn = !state.players[i].turn;
      }
    },

    addToPlayerWins: (
      state: GameState,
      action: { payload: { color: IPlayer["color"] } }
    ) => {
      state.status = "ended";
      const { color } = action.payload;

      const winnerPlayer = state.players.find(
        (player) => player.color === color
      );

      if (!winnerPlayer) {
        return;
      } else {
        winnerPlayer.wins++;
      }
    },

    drawGame: (state: GameState) => {
      state.status = "ended";
      state.draws += 1;
    },

    restartGame: (state: GameState) => {
      for (let i: number = 0; i < state.players.length; i++) {
        state.players[i].filledLines = [];
      }
      state.lines = initialState.lines;
      state.status = "started";
      changeTurn(state.players);
    },

    newGame: (state: GameState) => {
      state.lines = initialState.lines;
      changeTurn(state.players);
      state.status = "idle";
      state.draws = 0;
      state.players = initialState.players;
    },

    openGameForm: (state: GameState) => {
      state.gameFormIsOpen = true;
    },
    closeGameForm: (state: GameState) => {
      state.gameFormIsOpen = false;
    },
  },
});

export const {
  startGame,
  fillLine,
  drawGame,
  addToPlayerWins,
  newGame,
  restartGame,
  closeGameForm,
  openGameForm,
} = gameSlice.actions;

export default gameSlice.reducer;
