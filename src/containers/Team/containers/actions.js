import {
  ADD_SUPLENTE,
  ADD_TITULAR,
  DELETE_SUPLENTE,
  DELETE_TITULAR
} from "./constants";

export const agregarTitular = player => {
  return {
    type: ADD_TITULAR,
    player
  };
};

export const agregarSuplente = player => {
  return {
    type: ADD_SUPLENTE,
    player
  };
};

export const eliminarTitular = playerId => {
  return {
    type: DELETE_TITULAR,
    playerId
  };
};

export const eliminarSuplente = playerId => {
  return {
    type: DELETE_SUPLENTE,
    playerId
  };
};
