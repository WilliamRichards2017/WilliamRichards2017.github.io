<template>
  <div id="dataViz">

    <div id="hwListContainer" v-show="showHw6 || showHw5 || showHw4" class="inline">
      <ul>
        <li id="dataVizLink" v-on:click="showHw6 = false; showHw5 = false; showHw4=false;"><a>Data Vizualizations</a>
        </li>
      </ul>

      <span class="headerdivider"></span>


      <ul>
        <li id="hw6Active" v-on:click="showHw6 = true; showHw5 = false; showHw4=false;"><a>Political Word Choice</a>
        </li>
        <li id="hw5Active" v-on:click="showHw5 = true; showHw6 = false; showHw4=false;"><a>World Cup Results</a></li>
        <li id="hw4Active" v-on:click="showHw4 = true; showHw6 = false; showHw5 = false;"><a>Global Data
          Correlations</a></li>

      </ul>
    </div>

    <div v-show="!showHw6 && !showHw5 && !showHw4">
      <ul style="padding-top: 20px">
        <li v-on:click="showHw6 = true; showHw5 = false; showHw4 = false"><a>Political Word Choice</a></li>
        <div style="display: flex; padding-bottom: 25px">
          <p class="description"> Interactive beeswarm plot and bar chart to show the relative frequencies of various
            words used based on ones political leaning. Words can be separated into various categories, and a brush
            selection on the beeswarm plot can be used to filter the barchart visualization. </p>
          <img v-on:click="showHw6 = true; showHw5 = false; showHw4 = false" src="../../assets/beeswarm.png"
               style="padding-left: 50px" width="600x" height="125px">
        </div>
        <li v-on:click="showHw5 = true; showHw6 = false; showHw4 = false"><a>World Cup Results</a></li>
        <div style="display: flex; padding-bottom: 25px">
          <p class="description"> Interactive stats table and bracket tournament tree show how each country performed in
            the 2018 world cup. The data table can be sorted on by column. Rows can be expanded to view the results of
            each game a team played. Hovering over a team or game will highlight the corresponding path in the
            tournament bracket.</p>
          <img v-on:click="showHw5 = true; showHw6 = false; showHw4 = false" src="../../assets/worldcup.png"
               style="padding-left: 35px; padding-bottom: 25px" width="600px" height="175px">

        </div>


        <li v-on:click="showHw4 = true; showHw6 = false; showHw5 = false;"><a>Global Data Correlations</a></li>
        <div style="display: flex;">
          <p class="description">Interactive world map and scatter-plot used to show correlations between data metrics
            collected for each country over time. All metrics can be viewed for a specific country by selecting that
            country from the world map, or scatterplot. Data correlations can be visualized over time with the slider
            bar. </p>
          <img v-on:click="showHw4 = true; showHw6 = false; showHw5 = false;" src="../../assets/globaldata.png"
               style="padding-left: 45px" width="600" height="160px">

        </div>

      </ul>
    </div>

    <hw6 v-show="showHw6"></hw6>
    <hw5 v-show="showHw5"></hw5>
    <hw4 v-show="showHw4"></hw4>

  </div>
</template>

<script>
  import hw6 from './hw6/hw6.vue'
  import hw5 from './hw5/hw5.vue'
  import hw4 from "./hw4/hw4.vue";

  export default {
    components: {
      hw4,
      hw6,
      hw5
    },

    data() {
      return {
        showHw6: false,
        showHw5: false,
        showHw4: false,
      }
    },

    watch: {
      showHw6: function () {
        if (this.showHw6) {
          d3.select("#hw6Active")
            .classed("active", true);
        } else {
          d3.select("#hw6Active")
            .classed("active", false);
        }
      },
      showHw5: function () {
        if (this.showHw5) {
          d3.select("#hw5Active")
            .classed("active", true);
        } else {
          d3.select("#hw5Active")
            .classed("active", false);
        }
      },
      showHw4: function () {
        if (this.showHw4) {
          d3.select("#hw4Active")
            .classed("active", true);
        } else {
          d3.select("#hw4Active")
            .classed("active", false);
        }
      }

    }
  }
</script>

<style scoped>

  img:hover {
    cursor: pointer;
  }


  .inline {
    padding-bottom: 25px;
    padding-left: 10px;
  }

  .description {
    width: 50%;
  }

  #hwListContainer {
    padding-top: 10px;
    border-bottom: 1px solid #efece7;

  }

  #hwListContainer a {
    font-size: 18px;
  }

  .inline ul li {
    font-size: 20px;
    list-style-type: disc;
    float: left;
    text-indent: -4px;
    margin-right: 50px;
  }

  .active a {
    color: #ac7ce3;
  }

</style>

