export default class Minesweeper {
  id;
  sizeX;
  sizeY;
  board;
  difficulty;
  gameBoard;
  gameActive;
  mineExploded;
  totalMines;

  constructor(
    id,
    board,
    gameBoard,
    sizeX,
    sizeY,
    difficulty,
    mineExploded,
    gameActive,
    totalMines
  ) {
    this.sizeX = sizeX;
    this.sizeY = sizeY;
    this.difficulty = difficulty;
    this.gameBoard = gameBoard;
    this.id = id;
    this.mineExploded = mineExploded;
    this.gameActive = gameActive;
    this.totalMines = totalMines;

    if (board) {
      this.board = board;
    } else {
      var board = new Array(sizeY);

      for (var i = 0; i < board.length; i++) {
        board[i] = new Array(sizeX);
      }

      this.board = board;
    }
  }

  startGame = difficulty => {
    this.setDifficulty(difficulty);

    this.totalMines = this.generateNumberOfMines();

    this.generateMines(this.totalMines);

    for (let row = 0; row < this.sizeX; row++) {
      for (let column = 0; column < this.sizeY; column++) {
        if (this.board[column][row] != "x") {
          this.board[column][row] = this.numberOfMinesAround(row, column);
        }
      }
    }

    var board = new Array(this.sizeY);

    for (var i = 0; i < board.length; i++) {
      board[i] = new Array(this.sizeX);
    }

    this.gameBoard = board;
    this.gameActive = true;
  };

  setDifficulty = difficulty => {
    if (difficulty == 0) {
      this.difficulty = this.randomNumber(1, 3);
    } else {
      this.difficulty = difficulty;
    }
  };

  generateNumberOfMines = () => {
    const totalSquare = this.sizeX * this.sizeY;

    switch (this.difficulty) {
      case 1:
        return this.randomNumber(
          (5 * totalSquare) / 100,
          (10 * totalSquare) / 100
        );
      case 2:
        return this.randomNumber(
          (25 * totalSquare) / 100,
          (35 * totalSquare) / 100
        );
      case 3:
        return this.randomNumber(
          (45 * totalSquare) / 100,
          (55 * totalSquare) / 100
        );
    }
  };

  randomNumber = (min, max) => {
    const r = Math.random() * (max + 1 - min) + min;
    return Math.floor(r);
  };

  generateMines = numberOfMines => {
    for (let index = 0; index < numberOfMines; index++) {
      let row = this.randomNumber(0, this.sizeX - 1);
      let column = this.randomNumber(0, this.sizeY - 1);

      if (this.board[column][row] == undefined) {
        this.board[column][row] = "x";
      } else {
        index--;
      }
    }
  };

  numberOfMinesAround = (x, y) => {
    let numberOfMinesAround = 0;

    for (let zRow = x - 1; zRow <= x + 1; zRow++) {
      for (let zColumn = y - 1; zColumn <= y + 1; zColumn++) {
        if (
          zRow > -1 &&
          zRow < this.sizeX &&
          zColumn > -1 &&
          zColumn < this.sizeY
        ) {
          if (this.board[zColumn][zRow] == "x") {
            numberOfMinesAround++;
          }
        }
      }
    }
    return numberOfMinesAround;
  };

  setId = id => {
    this.id = id;
  };

  discoverItem = (y, x) => {
    if (!(y >= this.sizeY || x >= this.sizeX || x < 0 || y < 0)) {
      if (this.gameBoard[y][x] == null || this.gameBoard[y][x] == "?") {
        if (this.board[y][x] != "x") {
          this.gameBoard[y][x] = this.board[y][x];
          this.checkIfWasWon();
          if (this.board[y][x] == 0) {
            this.discoverItem(y - 1, x - 1);
            this.discoverItem(y - 1, x + 1);
            this.discoverItem(y - 1, x);
            this.discoverItem(y, x - 1);
            this.discoverItem(y, x + 1);
            this.discoverItem(y + 1, x);
            this.discoverItem(y + 1, x - 1);
            this.discoverItem(y + 1, x + 1);
          }
        } else {
          this.mineExploded = true;
          this.gameActive = false;
          this.solveGame();
        }
      }
    }
  };

  checkItem = (x, y) => {
    if (this.gameBoard[y][x] == null) {
      this.gameBoard[y][x] = "?";
      return;
    }
    if (this.gameBoard[y][x] == "?") {
      this.gameBoard[y][x] = "!";
      this.checkIfWasWon();
      return;
    }
    if (this.gameBoard[y][x] == "!") {
      this.gameBoard[y][x] = null;
      return;
    }
  };

  solveGame = () => {
    for (let row = 0; row < this.sizeY; row++) {
      for (let column = 0; column < this.sizeX; column++) {
        if (this.board[row][column] == "x") {
          this.gameBoard[row][column] = this.board[row][column];
        }
      }
    }
  };

  checkIfWasWon = () => {
    var pendingItems = 0;

    for (let row = 0; row < this.sizeX; row++) {
      for (let column = 0; column < this.sizeY; column++) {
        if (
          this.gameBoard[row][column] == null ||
          this.gameBoard[row][column] == "!"
        ) {
          pendingItems++;
        }
      }
    }
    if (pendingItems == this.totalMines) {
      this.mineExploded = false;
      this.gameActive = false;
    }
  };
}
