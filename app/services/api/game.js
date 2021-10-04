import GameAdapter from "../adapters/Game/GameAdapters";
import GameController from "../localStorage/GameController";

class Auth {
  newGame = async (sizeX, sizeY, difficulty) => {
    var response = GameController.newGame(sizeX, sizeY, difficulty);

    return GameAdapter.createdGame(response);
  };

  getGame = async id => {
    var response = GameController.getGame(id);

    return GameAdapter.getGame(response);
  };

  checkItem = async (id, position) => {
    var response = GameController.checkItem(id, position);

    return GameAdapter.checkItem(response, id);
  };

  discoverItem = async (id, position) => {
    var response = GameController.discoverItem(id, position);

    return GameAdapter.discoverItem(response, id);
  };
}

export default new Auth();
