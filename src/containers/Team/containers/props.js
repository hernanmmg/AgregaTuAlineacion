import {
  agregarSuplente,
  agregarTitular,
  eliminarSuplente,
  eliminarTitular
} from "./actions";

export const mapStateToProps = ({ entrenadorReducer }) => {
  return { ...entrenadorReducer };
};

export const mapDispatchToProp = dispatch => ({
  dispatch,

  agregarTitular: playerId => {
    dispatch(agregarTitular(playerId));
  },
  agregarSuplente: playerId => {
    dispatch(agregarSuplente(playerId));
  },
  eliminarTitular: playerId => {
    dispatch(eliminarTitular(playerId));
  },
  eliminarSuplente: playerId => {
    dispatch(eliminarSuplente(playerId));
  }
});
