<template>
<div id="dataViz">

    <div v-if="showHw6" style="height: 30px">
      <ul>
        <li v-on:click="showHw5 = true; showHw6 = false;"><a>Interactive table and tree</a></li>
      </ul>
  </div>

  <div v-else-if="showHw5"></div>

  <div v-else>

  <ul style="margin-top:10px;" v-if="!showHw6">
    <li v-on:click="showHw6 = true; showHw5 = false;"><a>Beeswarm vizualization</a></li>
    <p>showing word choice frequencies based on politcal leanings. Bar chart and beeswarm interactive vizualizations with d3 brush filtering </p>
    <li v-on:click="showHw5 = true; showHw6 = false"><a>Interactive tree and table</a></li>
    <p>Soccer swag swag </p>


  </ul>
  </div>


  <hw6 v-if="showHw6"></hw6>
    <hw5 v-if="showHw5"></hw5>

</div>
</template>

<script>
import hw6 from './dataVizComponents/hw6'
import hw5 from './dataVizComponents/hw5'



  export default {
    components: {
      hw6,
      hw5
    },

    data() {
      return {
        showHw6: false,
        showHw5: false,

      }

    }
  }
</script>

