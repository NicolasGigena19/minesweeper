import GameActionsName from "../../../utils/constants/actionsName/Game/GameActionsName";

const stateDefault = {
  currentGame: {}
};

const gameReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case GameActionsName.setGame:
      return Object.assign({}, state, {
        currentGame: action.game
      });
    default:
      return state;
  }
};

export default gameReducer;
