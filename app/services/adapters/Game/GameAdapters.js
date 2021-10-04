import { isError } from "../../../utils/helpers/isError";
import adaptErrors from "../../../utils/helpers/adaptErrors";
import { page, redirectTo } from "../../../utils/helpers/redirectTo";
import { getGame, setGame } from "../../../redux/actions/Game/GameActions";

export default class GameAdapter {
  static createdGame = response => {
    const { status, data } = response;
    if (!isError(status)) {
      redirectTo(page.game + `/${data.id}`);
      return [];
    }
    return [adaptErrors(data)];
  };

  static getGame = response => {
    const { status, data } = response;
    if (!isError(status)) {
      return [setGame(data.data)];
    }
    return [adaptErrors(data)];
  };

  static checkItem = (response, id) => {
    const { status, data } = response;
    if (!isError(status)) {
      return [getGame(id)];
    }
    return [adaptErrors(data)];
  };

  static discoverItem = (response, id) => {
    const { status, data } = response;
    if (!isError(status)) {
      return [getGame(id)];
    }
    return [adaptErrors(data)];
  };
}
