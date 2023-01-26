export default class Game {
  constructor() {
    this.turn = "X";
    this.board = new Array(9).fill(null);
    this.winningCombs = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  }

  combination() {
    return this.checkWinner();
  }

  nextTurn() {
    if (this.turn === "X") {
      this.turn = "O";
    } else {
      this.turn = "X";
    }
  }

  newMove(i) {
    if (this.combination()) return;
    if (this.board[i]) return;
    this.board[i] = this.turn;
    console.log(this.combination()); //GOLD
    if (!this.combination()) this.nextTurn();
  }

  //gameView member functions;;;
  updateArrayBoard(tile) {
    if (this.combination()) return;
    if (tile.target.textContent) return;
    tile.target.textContent = this.turn;
    return tile.target.dataset.index;
  }

  checkWinner() {
    for (let eachComb of this.winningCombs) {
      let [a, b, c] = eachComb;
      if (
        this.board[a] &&
        this.board[a] === this.board[b] &&
        this.board[a] === this.board[c]
      ) {
        return eachComb;
      }
    }
    return null;
  }

  //do not need (but good practice)
  // endOfGame() {
  //   if (this.combination()) {
  //     return true;
  //   } else return false;
  // }
}
