export default class GameAdapter {
  static notFound = () => {
    return {
      status: 404,
      data: {
        message: "Partida no encontrada"
      }
    };
  };
  static adapt = game => {
    delete game.board;
    delete game.totalMines;

    return {
      status: 200,
      data: {
        data: JSON.parse(JSON.stringify(game))
      }
    };
  };

  static ok = () => {
    return {
      status: 200,
      data: {
        data: null
      }
    };
  };

  static outOfIndex = () => {
    return {
      status: 422,
      data: {
        message: "posicion fuera de indice"
      }
    };
  };

  static gameOver = () => {
    return {
      status: 422,
      data: {
        message: "no se puede continuar un juego finalizado :("
      }
    };
  };
}
