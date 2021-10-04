import { all } from "redux-saga/effects";
import { game } from "./routesLogs/game";

export default function* rootSaga() {
  yield all([game()]);
}
