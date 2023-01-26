import Game from "./game.js";
// import gameView from "./game.js";

//creating instances
let game = new Game();

document.querySelector(".board").addEventListener("click", (e) => {
  e.preventDefault();
  //   if (game.endOfGame) return;
  game.newMove(game.updateArrayBoard(e));
});
