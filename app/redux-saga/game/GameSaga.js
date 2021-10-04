import { call } from "@redux-saga/core/effects";
import game from "../../services/api/game";
import { putAllResponses } from "../../utils/helpers/putAllResponses";

export function* newGame({ sizeX, sizeY, difficulty }) {
  const res = yield call(game.newGame, sizeX, sizeY, difficulty);

  yield putAllResponses(res);
}

export function* getGame({ id }) {
  const res = yield call(game.getGame, id);

  yield putAllResponses(res);
}

export function* checkItem({ gameId, position }) {
  const res = yield call(game.checkItem, gameId, position);

  yield putAllResponses(res);
}

export function* discoverItem({ gameId, position }) {
  const res = yield call(game.discoverItem, gameId, position);

  yield putAllResponses(res);
}
