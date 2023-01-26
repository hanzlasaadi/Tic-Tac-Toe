import Game from "./game.js";
// import gameView from "./game.js";

const restartButton = document.querySelector(".button");
const bigTile = document.querySelector(".board");
//Start a new game
let game = new Game();

//restart game
restartButton.addEventListener("click", (e) => {
  e.preventDefault();
  for (let el of bigTile.children) {
    el.textContent = null;
  }
  game = new Game();
});

//event listener on big tile
bigTile.addEventListener("click", (e) => {
  e.preventDefault();
  // console.log(document.querySelector(`.board-tile[data-index='${5}']`));
  game.newMove(game.updateArrayBoard(e));
});
