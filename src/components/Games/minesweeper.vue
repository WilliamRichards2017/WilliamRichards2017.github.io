<template>
  <div id="game">
    <button @click="resetBoard">reset</button>
    <table class="board">
      <tr v-for="(row, rowKey) in board" :key="rowKey">
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
import gridSquare from "./gridSquare";


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
              if(this.board[i][j].text === 'X'){
                this.board[x][y].count++;
              }
            }
          }
        }
        if(this.board[x][y].text !== 'X'){
          this.board[x][y].text =  this.board[x][y].count;
        }
      }
    }


    return count;
    },
    initMines(xC, yC) {
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
          mineInit.push(coords)
          minesRemaining--;
        }
      }

      for (let x = 0; x < this.width; x++) {
        for (let y = 0; y < this.height; y++) {
          let comp = x + "," + y;
          if (mineInit.includes(comp)) {
            this.board[x][y].text = 'X';
          }
        }
      }
      console.log("this.board", this.board);
    },

    flagSquare(x,y){
      if(this.board[x][y].className === "unrevealed"){
        this.board[x][y].className = 'flagged';
      }
      else if(this.board[x][y].className === "flagged"){
        this.board[x][y].className = 'unrevealed';
      }
    },


    revealSquare(x,y){
      if(this.firstClick){
        this.firstClick = false;
        this.initMines(x,y)
        this.initNeighbors();
      }
      if(x < 0 || x > this.width-1 || y < 0 || y > this.height-1){
        return;
      }
      if(this.board[x][y].className === 'unrevealed') {
        if (this.board[x][y].text === 'X') {
          this.board[x][y].className = 'mine'
          alert("Game over");
        } else {
          this.squaresClicked++;
          if(this.board[x][y].text > 0){
            this.board[x][y].className = 'hint';
          }
          else if(this.board[x][y].text === 0){
            this.board[x][y].className = 'hint';
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

    initBoard(){


      for (let x = 0; x < this.width; x++) {
        let column = [];
        for (let y = 0; y < this.height; y++) {
          let square = new gridSquare("unrevealed", "")
          column.push(square);
        }
        this.board.push(column)
      }
      console.log("this.board", this.board);
    },

    resetBoard() {

      for (let x = 0; x < this.width; x++) {
        for (let y = 0; y < this.height; y++) {
          this.board[x][y] = new gridSquare("unrevealed", "")
        }
      }
    },

    revealAll(){

      for (let x = 0; x < this.width; x++) {
        for (let y = 0; y < this.height; y++) {
          if(this.board[x][y].text === 'X'){
            this.board[x][y].className = 'mine';
          }
        }
      }
    },
  },


  mounted: function(){
    this.initBoard();

    let blockContextMenu, myElement;

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
