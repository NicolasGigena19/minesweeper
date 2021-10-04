import { takeEvery } from "@redux-saga/core/effects";
import { newGame, getGame, checkItem, discoverItem } from "../../game/GameSaga";
import GameActionsName from "../../../utils/constants/actionsName/Game/GameActionsName";

export function* game() {
  yield takeEvery(GameActionsName.newGame, newGame);
  yield takeEvery(GameActionsName.getGame, getGame);
  yield takeEvery(GameActionsName.checkItem, checkItem);
  yield takeEvery(GameActionsName.discoverItem, discoverItem);
}
