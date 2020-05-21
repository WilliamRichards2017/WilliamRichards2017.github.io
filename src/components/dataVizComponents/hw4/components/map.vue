<template>
    <div id="mapChart">
    </div>
</template>

<script>

    import CountryData from './../js/countryData'
    import json from './../data/world.json'

    export default {

        props: {
            popData: null,
        },

        data() {
            return {
                projection: null,
                nameArray: null,
                populationData: null,
                updateCountry: null,
                mapData: json,

            }
        },

        components: {},

        methods: {

            populateData() {
                this.projection = d3.geoWinkel3().scale(140).translate([365, 225]);
            },

            drawMap(world) {


                let geojson = topojson.feature(world, world.objects.countries);

                console.log("geojson", geojson);

                let countryData = geojson.features.map(country => {

                    let index = this.nameArray.indexOf(country.id);
                    let region = 'countries';

                    if (index > -1) {
                        region = this.populationData[index].region;
                        return new CountryData(country.type, country.id, country.properties, country.geometry, region);
                    } else {
                        return new CountryData(country.type, country.id, country.properties, country.geometry, "nf");
                    }

                });

                let w = 700;
                let h = 350;

                var svg = d3
                    .select("#mapChart")
                    .append("svg")
                    .attr("width", w)
                    .attr("height", h);


                var projection = d3.geoWinkel3()
                    .scale(w / 2 / Math.PI)
                    .translate([w / 2, h / 2]);

                var graticule = d3.geoGraticule();


                var path = d3.geoPath()
                    .projection(projection);

                var mapLayer = svg.append('g')
                    .attr("width", w)
                    .attr("height", h)
                    .classed('map-layer', true);

                mapLayer.selectAll('path')
                    .data(geojson.features)
                    .enter().append('path')
                    .attr('d', path)
                    .attr('vector-effect', 'non-scaling-stroke')
                    .on("click", d => { console.log("click"); this.updateCountryMap(d["id"])});


                mapLayer.selectAll('path')
                    .data(countryData)
                    .attr("class", d => d.region.toString())
                    .attr("id", d => d.id.toString());


                mapLayer.append("path")
                    .datum(graticule)
                    .attr("class", "graticule")
                    .attr("d", path);
                mapLayer.append("path")
                    .datum(graticule.outline)
                    .attr("class", "graticule outline")
                    .attr("d", path)
                    .attr("stoke-width", "4px");
            },

            updateHighlightClick(activeCountry) {
                this.clearHighlight();

                d3.select("#" + activeCountry.toUpperCase())
                    .classed("selected-country", true);

                d3.select("#" + activeCountry.toLowerCase())
                    .classed("selected-country", true);
            },

            updateCountryMap(countryID) {
                console.log("countryID", countryID);
                this.updateHighlightClick(countryID);
            },

            clearHighlight() {
                d3.selectAll("path")
                    .classed("selected-country", false);
            }
        },

        mounted() {
            this.populateData();


        },

        watch: {
            popData: function () {
                this.populationData = this.popData.population;
                this.nameArray = this.popData.population.map(d => d.geo.toUpperCase());
                console.log("this.nameAray", this.nameArray);
                this.drawMap(this.mapData);

            }
        }

    }
</script>


