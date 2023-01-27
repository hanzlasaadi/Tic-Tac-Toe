## Tic Tac Toe (Object Oriententation)

---

### Description

It is a simple `Tic-Tac-Toe` game implemented by obect oriented javascript.
You can play by:

- clicking on start new game `button`.
- `Player X` turn will always starts first.
- When a player wins, his combination is going to be bolded.
- click on start new game `button` to play again.

### Methods:

##### `updateArrayBoard(tile)`

- updates the game board with `X` or `O`, depending upon the turn of the players.
- returns html element `dataset.index` to put in the `function newMove(i)`

##### `function newMove(i)`

- updates the `game board array` with X or O.
- also checks if there is a winner yet or not
- if there is a winner, opacity is decreased, combination is turned green.
- if there isn't a winner, `nextTurn function` is called.

##### `nextTurn function()`

- if the turn is of `X`, chaanges it to `O` and player X becomes `Active-Player` and vice versa.

##### `checkWinner()`

- runs a for loop through the two dimensional winning combination array against the current game board array to check if there is a winner yet.

### Prerequisites

- Just clone the git repo and run index.html to play the game.

---

### Contribute

1. Fork this repo
2. Make changes
3. Open a pull request

---

© [Hanzla Saadi](https://github.com/hanzlasaadi)
