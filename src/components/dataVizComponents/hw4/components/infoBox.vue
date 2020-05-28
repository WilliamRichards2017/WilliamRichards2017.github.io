<template>
    <div id="infoBox">
        <div id="country-detail">

        </div>

    </div>
</template>

<script>

    import infoBoxData from './../js/infoBoxData.js';
    import json from './../data/world.json'


    export default {

        props: {
            infoData: null,
            activeCountry: null,
            activeYear: null,
            worldData: json,
        },

        data() {
            return {
            }
        },
        methods: {

            initInfoBox(){
                let self = this;
                let keys = Object.keys(self.infoData);


                Array.prototype.insert = function ( index, item ) {
                    this.splice( index, 0, item );
                };


                keys.insert(0, "Country");



                d3.select("#country-detail")
                    .append("text")
                    .text("Country: ")
                    .attr("id", "selectedCountry");


                d3.select("#country-detail")
                    .selectAll("text")
                    .data(keys).enter().append("div").append("text")
                    .text(d => d + ":  ")
                    .append("text")
                    .text("")
                    .attr("class", "details");

            },

            updateTextDescription(activeCountry, activeYear) {
                let self = this;
                let infoArr = [];

                let values = Object.values(self.infoData);

                let countryName = "";
                let regionName = "";


                Array.prototype.insert = function ( index, item ) {
                    this.splice( index, 0, item );
                };



                for(let i in values){
                    for(let key in values[i]) {

                        // console.log(values[i]);
                        if (values[i][key].hasOwnProperty("geo")) {

                            if (values[i][key]["geo"].toUpperCase() === activeCountry) {
                                countryName = values[i][key]["country"];
                                if(values[i][key].hasOwnProperty("region")) {
                                    regionName = values[i][key]["region"];
                                }
                                infoArr.push(values[i][key][activeYear]);
                            }
                        }
                    }
                }

                console.log("infoArr in updateTextDescription", infoArr);

                d3.select("#selectedCountry")
                    .text("Country: " + countryName)
                    .attr("class", regionName);

                d3.select("#country-detail").selectAll(".details")
                    .data(infoArr)
                    .text(d => d);

            }

        },


        mounted() {

        },



        watch: {
            infoData: function(){
                this.initInfoBox();
            },
            activeCountry: function(){
              this.updateTextDescription(this.activeCountry, this.activeYear);
            },

            activeYear: function(){
                this.updateTextDescription(this.activeCountry, this.activeYear);
            }
        }

    }
</script>
