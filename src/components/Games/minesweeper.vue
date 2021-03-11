<template>
  <div id="game">
    <table class="board">
      <tr v-for="(row, rowKey) in mineGrid" :key="rowKey">
        <td v-for="(col, colKey) in row" :key="colKey"
            @click.left="revealSquare(rowKey, colKey)"
            @click.right="flagSquare(rowKey, colKey)"
            :class="col.className"
        >
          <span v-if="col.className !== 'unrevealed' && col.className !== 'flagged'">{{col.text}} </span>
        </td>
      </tr>
    </table>
  </div>
</template>

<style>
.board {
  background: #bbb;
  border-collapse: collapse;
}

.board>tr>td {
  border: 1px solid white;
  padding: 0;
  height: 40px;
  width: 40px;
  text-align: center;
}

td.unrevealed {
  background-color: #bbb;
  cursor: pointer;
}

td.hint {
  background-color: #ddd;
}

td.unrevealed:hover {
  background-color: #ccc;
}
td.flagged{
  background-color: blueviolet;
}

td.mine {
  background-color: red;
  font-size: 20px
}

td.no-neighbors {
  background-color: #F0F0F0;
}
</style>

<script>





import hw4 from "../dataViz/hw4/hw4";
import hw6 from "../dataViz/hw6/hw6";
import hw5 from "../dataViz/hw5/hw5";
import gridSquare from "./gridSquare";

/**
 * Part 3:
 *
 * Minesweeper is a single player game where the player attempts to discover the location of a
 * given number of randomly placed mines on a 2-dimensional grid.
 *
 * When game play starts, the grid is actually uninitialized. The player's first move will cause
 * the mine locations to be randomly generated on the map but guaranteed to not have a mine on
 * or adjacent to the location of the player's move
 *
 * After the board is initialized, the player's move will execute.
 * 1. If the selected square is a mine, the player loses.
 * 2. If the revealed square has any neighboring mines, then a numeral hint is shown on that
 *    square indicating how many of the square's neighbors are mines.
 * 3. If the revealed square has no neighboring mines, then each of its neighbors are recursively
 *    revealed in the same manner.
 *
 * For the purposes of this game both orthogonal and diagonal count as neighbors
 * The player is then to deduce from the revealed hints as much as possible what other spaces are
 * safe to reveal.
 * Every turn, the player selects a square on the board to reveal, and the map is revealed
 * according to the 3 rules above.
 *
 * Consider the following 4x4 game configured to place 4 mines.
 * The player starts by selecting a1. At this point, the map is generated in a way that guarantees
 * that a1 is Empty (no mine in neighbors).
 * In this case the underlying map is generated as follows (E's represent empty locations on the
 * board, and M's represent mines):
 *
 *   a b c d
 * 1 E E E E
 * 2 E E M E
 * 3 E E E M
 * 4 E M M E
 *
 * Then, the a1 move then executes as follows:
 *
 * a1 is empty, and has no neighboring mines, and is revealed as such. Its neighbors are then also
 * revealed.
 * b1 has one neighboring mine (c2), so it is shown as a hint with the number 1.
 * b2 has one neighboring mine (c2), so it is shown as a hint with the number 1.
 * a2 is explored, and it has no neighboring mines, so it is revealed as such, and its contiguous
 * neighbors are revealed.
 * b3 has three neighboring mines (c2, b4, and c4), so the numeral 3 is shown.
 * a3 has one neighboring mine (b4), the numeral 1 is shown.
 * With that, the search stops. And the board looks as follows:
 *
 *   a b c d
 * 1   1 ? ?
 * 2   1 ? ?
 * 3 1 3 ? ?
 * 4 ? ? ? ?
 *
 * =========================================================
 *  The game strategy you may need to create AI
 *  You don't need understand this part to implement game
 * =========================================================
 * From here the player can deduce that c3 must not be a mine. (b1 has two neighbors one of which is a
 * mine, and both of b1's neighbors are neighbors of b2. c3 is a unique neighbor of b2, but b2's one
 * mine must be in one of b1's neighbors, so c3 must be safe.)
 * For the player's next move, they select c3, and the square is revealed as a 4. That is the only
 * square revealed for this move.
 *
 *   a b c d
 * 1   1 ? ?
 * 2   1 ? ?
 * 3 1 3 4 ?
 * 4 ? ? ? ?
 * =========================================================
 *
 * Game play will continue until the user either reveals a mine and loses, or reveals every non-mine space
 * and wins.
 *
 * An online game example: (The rule to initialize game might be different)
 * http://minesweeperonline.com/#beginner
 *
 * Extra Credit Ideas (no particular order):
 * - Implement a feature for the player to "flag" squares they believe to be mines. Don't allow the player
 *    to select a flag square.
 * - Create a AI to find a safe move if one exists (without knowing `mineGrid`), and then take a random
 *    safe move
 */

// class Square {
//   constructor(className = 'unrevealed', text = null) {
//     this.className = className;
//     this.text = text;
//   }
// }
//
// class Unrevealed extends Square {
//   constructor() {
//     super('unrevealed')
//   }
// }
//
// class Mine extends Square {
//   constructor() {
//     super('mine', 'x')
//   }
// }
//
// class NoNeighbors extends Square {
//   constructor() {
//     super('no-neighbors')
//   }
// }
//
// class Hint extends Square {
//   constructor(hint) {
//     super('hint', hint)
//   }
// }
//
// class Game {
//   constructor(parent) {
//     this.width = 8;
//     this.height = 8;
//     this.numberOfMines = 10;
//     this.mineGrid = [];
//     this.board = [];
//     this.firstClick = false;
//
//     this.createHtmlElements(parent);
//   }
//
//   initializeMineGrid(xC, yC) {
//     //select 10 random 8,8
//
//     let mineInit = [];
//     let minesRemaining = this.numberOfMines;
//
//     while(minesRemaining > 0){
//
//
//
//       const x = Math.floor(Math.random() * this.width);
//       const y = Math.floor(Math.random() * this.height);
//       let validSpace = false;
//
//       if((x < xC-1 || x > xC + 1) && (y < yC-1 || y > yC+1)){
//         validSpace = true;
//       }
//
//       let coords = x + "," + y;
//       if(!mineInit.includes[coords] && validSpace){
//         console.log("coords", coords);
//         mineInit.push(coords)
//         minesRemaining--;
//       }
//     }
//
//     console.log("mines", mineInit);
//
//     for (let x = 0; x < this.width; x++) {
//       let column = [];
//       for (let y = 0; y < this.height; y++) {
//         let comp = x + "," + y;
//         if(mineInit.includes(comp)){
//           column.push(true);
//         }
//         else{
//           column.push(false);
//         }
//
//       }
//       this.mineGrid.push(column)
//     }
//     console.log("this.mineGrid", this.mineGrid);
//
//   }
//
//   /**
//
//
//   /**
//    * You can ignore this function.
//    */
//   render() {
//     for (let x = 0; x < this.width; x++) {
//       for (let y = 0; y < this.height; y++) {
//         let square = this.board[x][y] || new Unrevealed();
//         this.table.childNodes[y].childNodes[x].className = square.className;
//         this.table.childNodes[y].childNodes[x].innerHTML = square.text;
//
//       }
//     }
//   }
//
//   /**
//    * TODO - Implement game logic:
//    * 1. On the player's first move, randomly initialize the `mineGrid` with `numberOfMines`
//    *    randomly placed mines (ensuring the selected coordinate is not a mine or hint).
//    * 2. Implement the lose condition (if the player selects a mine), and display all mines
//    *    before exiting.
//    * 3. Implement the hint condition (if the player selects an empty space neighboring 1 or
//    *    more mines)
//    * 4. Implement the recursive reveal (if the revealed space has no neighboring mines)
//    * 5. Implement the win condition (if every un-revealed space has a mine underlying it),
//    *    and reveal the board.
//    */
//
//   play() {
//     while (true) {
//       this.render();
//     }
//   }
//
//   getNeighboringMines(x,y){
//
//     let count = 0;
//
//     for(let i = x-1; i < x+2; i++){
//       for(let j = y-1; j < y+2; j++){
//         if(i > -1 && i < this.width && j > -1 && j < this.height){
//           if(this.mineGrid[i][j]){
//             count++;
//           }
//         }
//       }
//     }
//
//     return count;
//   }
//
//   floodFill(x,y){
//     for(let i = x-1; i < x+2; i++){
//       for(let j = y-1; j < y+2; j++){
//         if(i > -1 && i < this.width && j > -1 && j < this.height) {
//           this.reveal(x, y);
//         }
//       }
//     }
//   }
//
//   /**
//    * Example for updating the board:
//    *      this.board[x][y] = new Mine();
//    *      this.board[x][y] = new Hint(5);
//    */
//   reveal(x, y) {
//     if(!this.firstClick){
//       this.firstClick = true;
//       this.initializeMineGrid(x, y);
//     }
//     console.log("this.mineGrid", this.mineGrid);
//
//     let count = this.getNeighboringMines(x,y);
//
//
//     //Lose condition
//     if(this.mineGrid[x][y]){
//       for(let i = 0; i < this.width; i++){
//         for(let j = 0; j < this.height; j++){
//           if(this.mineGrid[i][j]){
//             this.board[i][j] = new Mine();
//
//           }
//         }
//       }
//       this.board[x][y] = new Mine();
//       alert("You clicked a mine! Game Over!");
//     }
//
//     //Hint condition
//     else if(count > 0){
//
//       this.board[x][y] = new Hint(count);
//     }
//
//     else {
//       this.board[x][y] = new NoNeighbors();
//       // this.floodFill(x,y);
//     }
//     this.render();
//   }
// }
//
// // runner
// const game = new Game(document.getElementById('game'));

export default {
  name: 'minesweeper',

  methods : {
    //todo: refactor, still O(n^2) but looks ugly, can also render count on click,
    initNeighbors(){

    let count = 0;

    for(let x = 0; x < this.width; x++){
      for(let y = 0; y < this.height; y++){
        for(let i = x-1; i < x+2; i++){
          for(let j = y-1; j < y+2; j++){
            if(i > -1 && i < this.width && j > -1 && j < this.height){
              if(this.mineGrid[i][j].text === 'X'){
                this.mineGrid[x][y].count++;
              }
            }
          }
        }
        if(this.mineGrid[x][y].text !== 'X'){
          this.mineGrid[x][y].text =  this.mineGrid[x][y].count.toString();
        }
      }
    }


    return count;
    },
    initializeMineGrid(xC, yC) {
      //select 10 random 8,8

      let mineInit = [];
      let minesRemaining = this.numberOfMines;

      while (minesRemaining > 0) {


        const x = Math.floor(Math.random() * this.width);
        const y = Math.floor(Math.random() * this.height);
        let validSpace = false;

        if ((x < xC - 1 || x > xC + 1) && (y < yC - 1 || y > yC + 1)) {
          validSpace = true;
        }

        let coords = x + "," + y;
        if (!mineInit.includes[coords] && validSpace) {
          console.log("coords", coords);
          mineInit.push(coords)
          minesRemaining--;
        }
      }

      console.log("mines", mineInit);

      for (let x = 0; x < this.width; x++) {
        let column = [];
        for (let y = 0; y < this.height; y++) {
          let comp = x + "," + y;
          let square = new gridSquare("unrevealed", "")
          if (mineInit.includes(comp)) {
            square.text = 'X';
          }
          column.push(square);
        }
        this.mineGrid.push(column)
      }
      console.log("this.mineGrid", this.mineGrid);
    },

    flagSquare(x,y){
      if(this.mineGrid[x][y].className === "unrevealed"){
        this.mineGrid[x][y].className = 'flagged';
      }
      else if(this.mineGrid[x][y].className === "flagged"){
        this.mineGrid[x][y].className = 'unrevealed';
      }
    },


    revealSquare(x,y){
      if(x < 0 || x > this.width-1 || y < 0 || y > this.height-1){
        return;
      }
      if(this.mineGrid[x][y].className === 'unrevealed') {
        if (this.mineGrid[x][y].text === 'X') {
          this.mineGrid[x][y].className = 'mine'
          alert("Game over");
        } else {
          this.squaresClicked++;
          if(parseInt(this.mineGrid[x][y].text) > 0){
            this.mineGrid[x][y].className = 'hint';
          }
          else if(parseInt(this.mineGrid[x][y].text) === 0){
            this.mineGrid[x][y].className = 'hint';
            this.revealSquare(x-1, y-1);
            this.revealSquare(x-1, y);
            this.revealSquare(x-1, y+1);
            this.revealSquare(x, y-1);
            this.revealSquare(x, y+1);
            this.revealSquare(x+1, y-1);
            this.revealSquare(x+1, y);
            this.revealSquare(x+1, y+1);
          }

          if (this.squaresClicked === this.winCondition) {
            //TODO: reveal squares, prompt restart
            this.revealAll();
            alert("You Won!");

          }
        }
      }
    },

    resetBoard(){

    },

    revealAll(){

      for (let x = 0; x < this.width; x++) {
        for (let y = 0; y < this.height; y++) {
          if(this.mineGrid[x][y].text === 'X'){
            this.mineGrid[x][y].className = 'mine';
          }
        }
      }
    },
  },


  mounted: function(){
    this.initializeMineGrid(20,20);
    this.initNeighbors();

      var blockContextMenu, myElement;

      blockContextMenu = function (evt) {
        evt.preventDefault();
      };

      myElement = document.querySelector('#game');
      myElement.addEventListener('contextmenu', blockContextMenu);

  },

  data() {
    return {
      width: 9,
      height : 9,
      numberOfMines: 7,
      mineGrid: [],
      board: [],
      firstClick: true,
      squaresClicked: 0,
    }
  },
  computed: {
    winCondition(){
     return this.width * this.height - this.numberOfMines;
    }
  }
}
</script>
