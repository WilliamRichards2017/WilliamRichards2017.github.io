<template>
    <div id="dataViz">

        <div id="hw6Container" v-if="showHw6">
            <ul>
                <li v-on:click="showHw5 = true; showHw6 = false; showHw4=false;"><a>Interactive table and tree</a></li>
                <li v-on:click="showHw4 = true; showHw6 = false; showHw5 = false;"><a>World Map</a></li>

            </ul>
        </div>

        <div v-else-if="showHw5">
            <ul>
                <li v-on:click="showHw6 = true; showHw5 = false; showHw4=false;"><a>Beeswarm vizualization</a></li>
                <li v-on:click="showHw4 = true; showHw6 = false; showHw5 = false;"><a>World Map</a></li>
            </ul>
        </div>

        <div v-else-if="showHw4">
            <ul>
                <li v-on:click="showHw6 = true; showHw5 = false; showHw4=false;"><a>Beeswarm vizualization</a></li>
                <li v-on:click="showHw5 = true; showHw6 = false; showHw4=false;"><a>Interactive table and tree</a></li>
            </ul>
        </div>

        <div v-else>
            <ul style="margin-top:10px;" v-if="!showHw6">
                <li v-on:click="showHw6 = true; showHw5 = false; showHw4 = false"><a>Beeswarm vizualization</a></li>
                <p>showing word choice frequencies based on politcal leanings. Bar chart and beeswarm interactive
                    vizualizations with d3 brush filtering </p>
                <li v-on:click="showHw5 = true; showHw6 = false; showHw4 = false"><a>Interactive tree and table</a></li>
                <p>Soccer swag swag </p>
                <li v-on:click="showHw4 = true; showHw6 = false; showHw5 = false;"><a>World Map</a></li>
                <p>World map </p>
            </ul>
        </div>

        <hw6 v-if="showHw6"></hw6>
        <hw5 v-if="showHw5"></hw5>
        <hw4 v-if="showHw4"></hw4>

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
        }
    }
</script>

<style>
    #hw6Container{
        height: 30px;
    }
</style>

