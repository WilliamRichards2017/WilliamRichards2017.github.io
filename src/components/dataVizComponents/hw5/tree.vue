
<template>
    <div>


        <h2>Second Stage</h2>
        <svg width="600" height="560">
            <g id="tree"></g>
        </svg>
    </div>

</template>

<script>

    import treeData from './data/fifa-tree-2018.js'



    export default {

        props: {
            updateTreeData: null,
            clearTreeData: null,
    },

        data() { return {

            }
        },
        methods : {

            createTree() {

// ******* TODO: PART VI *******

                let width = 500;
                let height = 560;

                treeData.forEach( (d, i) => {
                    d.id = d.Team + d.Opponent + i;
                });

                        var treeLayout = d3.tree();

                let root = d3.stratify()
                    .id((d, i) => {return  i })
                    .parentId(d => {return  d.ParentGame })
                    (treeData);


                let treeSvg = d3.select("#tree");

                treeLayout(root);

                var wScale = d3.scaleLinear()
                    .domain([0, 1])
                    .range([0, width]);

                let hScale = d3.scaleLinear()
                    .domain([0, 1])
                    .range([0, height]);




                treeSvg.selectAll('circle.node')
                    .data(root.descendants())
                    .enter()
                    .append('circle')
                    .attr('cx', function(d) {return wScale(d.y) + 15;})
                    .attr('cy', function(d) {return hScale(d.x);})
                    .attr('r', 4)
                    .attr("fill", d => {if(d.data.Wins === 0) {
                        return "red"
                    }
                    else{
                        return "blue"
                    }
                    })

                treeSvg.selectAll("text.node")
                    .data(root.descendants())
                    .enter()
                    .append('text')
                    .text(d => d.data.Team)
                    .attr("x", function(d) {return wScale(d.y) + 15;})
                    .attr("y", function(d) {return hScale(d.x) - 5;});



                let croatia = treeSvg.selectAll("text")
                    .filter(function(){
                        return d3.select(this).text() == "Croatia"
                    })

                treeSvg
                    .selectAll('line.link')
                    .data(root.links())
                    .enter()
                    .append('line')
                    .classed('link', true)
                    .attr('x1', function(d) {return wScale(d.source.y) + 15;})
                    .attr('y1', function(d) {return hScale(d.source.x);})
                    .attr('x2', function(d) {return wScale(d.target.y) + 15;})
                    .attr('y2', function(d) {return hScale(d.target.x);});

//Create a tree and give it a size() of 800 by 300.


//Create a root for the tree using d3.stratify();


//Add nodes and links to the tree.
            },

            /**
             * Updates the highlighting in the tree based on the selected team.
             * Highlights the appropriate team nodes and labels.
             *
             * @param row a string specifying which team was selected in the table.
             */
            updateTree(d) {

                d3.select("#tree").selectAll('line.link').filter((dl) => {
                    return dl.target.data.Team === d.key;
                }).style("stroke", "red");


                d3.select("#tree").selectAll("text").filter((dt) => {
                    return dt.data.Team === d.key;
                }).style("fill", "red");


            },

            /**
             * Removes all highlighting from the tree.
             */
            clearTree() {
// ******* TODO: PART VII *******
                d3.select("#tree").selectAll('line.link')
                    .style("stroke", "black");

                d3.select("#tree").selectAll("text")
                    .style("fill", "black");


            }


        },
        mounted() {
            this.createTree();

        },

        watch: {
            updateTreeData: function(){
                this.updateTree(this.updateTreeData);
            },
            clearTreeData: function(){
                this.clearTree();
            }
        }

    }
</script>

<style>
</style>
