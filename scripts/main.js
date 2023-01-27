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
    el.style.opacity = "100%";
    el.classList.remove("winner");
    el.classList.remove("tile-x");
    el.classList.remove("tile-o");
  }
  game = new Game();
  game.playerO.classList.remove("active-player");
  game.playerX.classList.add("active-player");
});

//event listener on big tile
bigTile.addEventListener("click", (e) => {
  e.preventDefault();
  game.newMove(game.updateArrayBoard(e));
});
