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
    this.playerX = document.querySelector(".player-X");
    this.playerO = document.querySelector(".player-O");
    this.globalCombination;
  }

  combination() {
    return this.checkWinner();
  }

  nextTurn() {
    if (this.turn === "X") {
      this.turn = "O";
      this.playerO.classList.toggle("active-player");
      this.playerX.classList.toggle("active-player");
    } else {
      this.turn = "X";
      this.playerX.classList.toggle("active-player");
      this.playerO.classList.toggle("active-player");
    }
  }

  newMove(i) {
    if (this.combination()) {
      console.log("newMove ending");
      this.combination();
      return;
    }
    // return;
    if (this.board[i]) return;
    this.board[i] = this.turn;
    console.log(this.combination(), "Gold again"); //GOLD

    if (!this.combination()) this.nextTurn();
  }

  //gameView member functions;;;
  updateArrayBoard(tile) {
    if (this.combination()) {
      console.log("updateArrayBoeard");
      console.log(this.combination());
      return;
    }
    if (tile.target.textContent) return;
    tile.target.textContent = this.turn;
    this.turn === "X"
      ? tile.target.classList.add("tile-x")
      : tile.target.classList.add("tile-o");
    console.log("With Gold but updateArrayBoard"); //gold
    // this.combination().forEach((val) => {
    //   document.getElementsByClassName(`div${val}`).classList.add("winner");
    // });
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
