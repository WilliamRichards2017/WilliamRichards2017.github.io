<template>
<div class="birthdayParadox">

  <h1>Birthday Paradox</h1>
  <p>Generate random numbers in the domain [1-{{inputN}}] until two have the same value. Repeat this for {{inputM}} trials. What is the average number of numbers generated before a collision occured?</p>
  M: <input id="inputM" @keyup.enter="runMSims" v-model="inputM" type="text" placeholder="0">
  N: <input id="inputN" @keyup.enter="runSim" v-model="inputN" type="text" placeholder="0">

  <!--
  <li v-for="coord in coordPairs">
    ({{ coord.x }} , {{coord.y}})
    </li>
  -->


  <button v-on:click="runMSims()">run M Simulations</button>
  <div v-if="displayM">
    <p>Average result after {{inputM}} simulations is: {{avg}}</p>
  </div>
  <p/>
  <button v-on:click="generateCoords()">Generate coordinates </button>
  <li v-for="coord in coordPairs">
    ({{coord.x}} , {{coord.y}})
    </li>
  <p></p>
  <button v-on:click="plotGraph()">Plot graph</button>

  <div class="graph">
  </div>

</div>
</template>

<script>
import * as d3 from "d3";

  export default {

    data: function () {
    return {
      inputM : 'M',
      inputN : 'N',
      maxNum : 0,
      xCount : 0,
      avg : NaN,
      results : [],
      coordPairs : [],
      displayM : false,
    }
  },
    methods : {
            runSim: function()
            {
              var mySet = new Set();
              var buff = new Uint32Array(1);
              var count = 0;
              var ret = false;
                while(ret == false){
                  window.crypto.getRandomValues(buff);
                    var newNum = buff[0] % this.inputN;
                    if(mySet.has(newNum)){
                      ret = true;
                    }
                    else{
                      mySet.add(newNum);
                      ++count;
                    }
                }
                return count;
            },

        runMSims: function()
        {
          var m = this.inputM;


          this.results = [];
          for(var i = 0; i < m; i++){
              this.results.push(this.runSim());
            }
            this.results.sort();
            this.avg = this.results.reduce( ( p, c ) => p + c, 0 ) / this.results.length;
            this.displayM = true;
        },
        generateCoords: function(){
          this.maxNum = 0;
          this.coordPairs = [];
          this.xCount = 0;
          this.maxNum = Math.max.apply(Math, this.results);

          const xCountMap = new Map([...new Set(this.results)].map(
              x => [x, this.results.filter(y => y === x).length]
          ));

          for(var i = 0; i < this.maxNum; i++){

            //evaluate undefined to 0
            var temp = xCountMap.get(i);
            if (temp == undefined) {
              temp = 0;
            }
            this.xCount += temp;
            this.coordPairs.push({x: parseFloat(i), y: parseFloat(this.xCount)});
            console.log("X: " + i + ", Y: " + parseFloat(this.xCount/this.inputM));

          }
        },
        plotGraph: function(){

        }
      }
    }
</script>

<style scoped>
  p {
  	padding:.2em;
    color:#656668
  }

  h1 {
  	color:#9068be;
  	margin:0 0 10px;
    padding-top:.4em;
  	padding-bottom:.2em;
  	font:normal 17px Georgia, serif;
  	border-bottom:1px solid #efece7;
  }

</style>
