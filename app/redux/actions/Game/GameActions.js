import GameActionsName from "../../../utils/constants/actionsName/Game/GameActionsName";

export function newGame(sizeX, sizeY, difficulty) {
  return {
    type: GameActionsName.newGame,
    sizeX,
    sizeY,
    difficulty
  };
}

export function getGame(id) {
  return {
    type: GameActionsName.getGame,
    id
  };
}

export function setGame(game) {
  return {
    type: GameActionsName.setGame,
    game
  };
}

export function checkItem(position, gameId) {
  return {
    type: GameActionsName.checkItem,
    position,
    gameId
  };
}

export function discoverItem(position, gameId) {
  return {
    type: GameActionsName.discoverItem,
    position,
    gameId
  };
}
