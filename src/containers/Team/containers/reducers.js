import {
  ADD_SUPLENTE,
  ADD_TITULAR,
  DELETE_SUPLENTE,
  DELETE_TITULAR
} from "./constants";

export const initialState = {
  players: [
    {
      id: 1,
      nombre: "Messi",
      foto:
        "https://cdnmd.lavoz.com.ar/sites/default/files/styles/box_128/public/messi_cara.jpg"
    },
    {
      id: 2,
      nombre: "Virgil Van Dijk",
      foto:
        "https://www.thenational.ae/image/policy:1.832780:1551681395/image/2019-03-03T174633Z_11792990_RC19D7949F00_RTRMADP_3_SOCCER-ENGLAND-EVE-LIV.JPG?f=1x1&w=128&$p$f$w=3e6bc4d"
    }
  ],
  startingeleven: [],
  subsbench: []
};

const playerMoved = (array, playerId) => {
  return array.filter(player => player.id !== playerId);
};

const addPlayer = (array, playerId) => {
  return array.filter(player => player.id === playerId)[0];
};

const entrenadorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TITULAR:
      return {
        ...state,
        startingeleven: [...state.startingeleven, action.player],
        players: playerMoved(state.players, action.player.id)
      };
    case ADD_SUPLENTE:
      return {
        ...state,
        subsbench: [...state.subsbench, action.player],
        players: playerMoved(state.players, action.player.id)
      };
    case DELETE_TITULAR:
      return {
        ...state,
        players: [
          ...state.players,
          addPlayer(state.startingeleven, action.playerId)
        ],
        startingeleven: playerMoved(state.startingeleven, action.playerId)
      };
    case DELETE_SUPLENTE:
      return {
        ...state,
        players: [
          ...state.players,
          addPlayer(state.subsbench, action.playerId)
        ],
        subsbench: playerMoved(state.subsbench, action.playerId)
      };
    default:
      return state;
  }
};

export default entrenadorReducer;
