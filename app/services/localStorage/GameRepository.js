import LocalStorageService from "./LocalStorageService";
import Minesweeper from "./Minesweeper";

export default class GameRepository {
  static save = game => {
    const games = JSON.parse(LocalStorageService.get("games"));

    if (games == undefined) {
      game.setId(0);
      LocalStorageService.set("games", JSON.stringify([game]));
      return 0;
    } else {
      if (game.id) {
        if (games.find(gameX => gameX.id == game.id)) {
          let newBoard = games.map(gameX =>
            gameX.id == game.id ? game : gameX
          );
          LocalStorageService.set("games", JSON.stringify(newBoard));
        }
      } else {
        game.setId(games.length);
        games.push(game);
        LocalStorageService.set("games", JSON.stringify(games));
        return games.length - 1;
      }
    }
  };

  static getById = id => {
    const games = JSON.parse(LocalStorageService.get("games"));
    const game = games.find(game => game.id == id);

    if (game) {
      const {
        sizeX,
        sizeY,
        board,
        id: gameId,
        difficulty,
        gameBoard,
        mineExploded,
        gameActive,
        totalMines
      } = game;

      return new Minesweeper(
        id,
        board,
        gameBoard,
        sizeX,
        sizeY,
        difficulty,
        mineExploded,
        gameActive,
        totalMines
      );
    }
    return false;
  };
}
