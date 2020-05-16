<template>
    <div id="hw5">
        <header>
            <img src="assets/fifa_russia_logo.png" alt="WC Russia Logo" id="logo"/>
            <h1>Exploring Match Statistics for 2018 World Cup: CS-6630 Homework</h1>
            <div>Name: Will Richards; E-Mail: richardsw2017@gmail.com; UID: u0401321</div>
        </header>

        <div style="display: inline-flex">

            <div class="view">
                <h2>Score Table</h2>

                <table id="matchTable">
                    <thead>
                    <tr>
                        <th>Team</th>
                        <td style="text-align:center"> Goals <span class="glyphicon glyphicon-sort"></span><br/></td>
                        <td>Round/Result</td>
                        <td>Wins</td>
                        <td>Losses</td>
                        <td>Total Games</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td id="goalHeader"></td>
                    </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>

            </div>
            <div class="view">


                <h2>Second Stage</h2>
                <svg width="600" height="900">
                    <g id="tree"></g>
                </svg>
            </div>
        </div>

    </div>

</template>

<script>


    export default {

        data() { return {

        }
        },
        methods : {


        },
        mounted() {

        },
        watch : {

        }
    }
</script>

<style>




</style>

