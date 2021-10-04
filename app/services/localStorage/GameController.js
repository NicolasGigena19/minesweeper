import GameAdapter from "./GameAdapter";
import GameRepository from "./GameRepository";
import Minesweeper from "./Minesweeper";

export default class GameController {
  static newGame = (sizeX, sizeY, difficulty) => {
    if (sizeX < 4 || sizeY < 4 || difficulty < 0 || difficulty > 3) {
      return {
        status: 422,
        data: {
          message: "Informacion invalida"
        }
      };
    } else {
      let game = new Minesweeper(null, null, null, sizeX, sizeY);

      game.startGame(difficulty);

      let id = GameRepository.save(game);

      return {
        status: 201,
        data: {
          id
        }
      };
    }
  };

  static getGame = id => {
    let game = GameRepository.getById(id);

    if (game) {
      return GameAdapter.adapt(game);
    } else {
      return GameAdapter.notFound();
    }
  };

  static discoverItem = (id, position) => {
    let game = GameRepository.getById(id);

    if (game) {
      if (game.gameActive) {
        const { x, y } = position;
        if (y >= game.sizeY || x >= game.sizeX || x < 0 || y < 0) {
          return GameAdapter.outOfIndex();
        }

        game.discoverItem(y, x);

        GameRepository.save(game);
        return GameAdapter.ok(game);
      }
      return GameAdapter.gameOver();
    } else {
      return GameAdapter.notFound();
    }
  };

  static checkItem = (id, position) => {
    let game = GameRepository.getById(id);
    if (game) {
      if (game.gameActive) {
        const { x, y } = position;
        if (y >= game.sizeY || x >= game.sizeX || x < 0 || y < 0) {
          return GameAdapter.outOfIndex();
        }

        game.checkItem(x, y);

        GameRepository.save(game);
        return GameAdapter.ok(game);
      }
      return GameAdapter.gameOver();
    } else {
      return GameAdapter.notFound();
    }
  };
}
