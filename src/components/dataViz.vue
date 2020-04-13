<template>
<div id="dataViz">


  <ul style="margin-top:10px;" v-if="!showHw6">
    <li v-on:click="showHw6 = true"><a>Beeswarm vizualization</a></li>
    <p>showing word choice frequencies based on politcal leanings. Bar chart and beeswarm interactive vizualizations with d3 brush filtering </p>

  </ul>

  <hw6 v-if="showHw6"></hw6>

</div>
</template>

<script>
import hw6 from './dataVizComponents/hw6'


  export default {
    components: {
      hw6
    },

    data() {
      return {
        showHw6: false,

      }

    }
  }
</script>

