<template>
    <div id="dataViz">

        <div id="hwListContainer" v-show="showHw6 || showHw5 || showHw4" class="inline">
            <ul>
                <li id="dataViz" v-on:click="showHw6 = false; showHw5 = false; showHw4=false;"><a>Data Vizualizations</a></li>
            </ul>

            <span class="headerdivider"></span>


            <ul>
                <li id="hw6Active" v-on:click="showHw6 = true; showHw5 = false; showHw4=false;"><a>Political Word Choice</a></li>
                <li id="hw5Active" v-on:click="showHw5 = true; showHw6 = false; showHw4=false;"><a>World Cup Results</a></li>
                <li id="hw4Active" v-on:click="showHw4 = true; showHw6 = false; showHw5 = false;"><a>Global Data Correlations</a></li>

            </ul>
        </div>

        <div v-show="!showHw6 && !showHw5 && !showHw4">
            <ul style="padding-top: 20px">
                <li v-on:click="showHw6 = true; showHw5 = false; showHw4 = false"><a>Political Word Choice</a></li>
                <p class="description"> Interactive beeswarm plot and bar chart to show the relative frequencies of various words used based on ones political leaning.  Words can be separated into various categories, and a brush selection on the beeswarm plot can be used to filter the barchart visualization.   </p>
                <li v-on:click="showHw5 = true; showHw6 = false; showHw4 = false"><a>World Cup Results</a>
                <p class="description"> Interactive stats table and bracket tournament tree show how each country performed in the 2018 world cup.  The data table can be sorted on by column.  Rows can be expanded to view the results of each game a team played. Hovering over a team or game will highlight the corresponding path in the tournament bracket.</p></li>
                <li v-on:click="showHw4 = true; showHw6 = false; showHw5 = false;"><a>Global Data Correlations</a></li>
                <p class="description">Interactive world map and scatter-plot used to show correlations between data metrics collected for each country over time.  All metrics can be viewed for a specific country by selecting that country from the world map, or scatterplot. Data correlations can be visualized over time with the slider bar.  </p>
            </ul>
        </div>

        <hw6 v-show="showHw6"></hw6>
        <hw5 v-show="showHw5"></hw5>
        <hw4 v-show="showHw4"></hw4>

    </div>
</template>

<script>
    import hw6 from './dataVizComponents/hw6/hw6.vue'
    import hw5 from './dataVizComponents/hw5/hw5.vue'
    import hw4 from "./dataVizComponents/hw4/hw4";

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
            showHw6: function(){
                if(this.showHw6){
                    d3.select("#hw6Active")
                        .classed("active", true);
                }
                else{
                    d3.select("#hw6Active")
                        .classed("active", false);
                }
            },
            showHw5: function(){
                if(this.showHw5){
                    d3.select("#hw5Active")
                        .classed("active", true);
                }
                else{
                    d3.select("#hw5Active")
                        .classed("active", false);
                }
            },
            showHw4: function(){
                if(this.showHw4){
                    d3.select("#hw4Active")
                        .classed("active", true);
                }
                else{
                    d3.select("#hw4Active")
                        .classed("active", false);
                }
            }

        }
    }
</script>

<style scoped>


    .inline{
        padding-bottom: 20px;
        padding-left: 10px
    }

    .description{
        width: 50%;
    }

   #hwListContainer a {
        font-size: 18px
    }

    .inline ul li {
        font-size: 20px;
        list-style-type:disc;
        float: left; text-indent:-4px;
        margin-right:50px; }

    .active a{
        color: #ac7ce3;
    }

</style>

