<template>
    <div id="hw5">
        <div class="flex">
            <div class="view">
                <h2>Score Table</h2>
                <table id="matchTable">
                    <thead>
                    <tr>
                        <th style="display: inline-flex">
                            <svg width="32" height="32">
                            <image xlink:href="https://visualpharm.com/assets/165/Sort-595b40b85ba036ed117dbb04.svg" width="32" height="32"/>
                        </svg>
                            <div style="padding-top: 8px"> Team </div></th>
                        <td style="text-align:center;">
                            <div style="display: inline-flex">
                            <svg width="32" height="32">
                                <image xlink:href="https://visualpharm.com/assets/165/Sort-595b40b85ba036ed117dbb04.svg" width="32" height="32"/>
                            </svg>
                            <div style="padding-top: 8px"> Goals </div>
                            </div>
                        </td>

                           <td>
                               <div style="display: inline-flex">
                               <svg width="32" height="32">
                                   <image xlink:href="https://visualpharm.com/assets/165/Sort-595b40b85ba036ed117dbb04.svg" width="32" height="32"/>
                               </svg>
                               <div style="padding-top: 8px"> Round/Results </div>
                           </div></td>
                        <td>                   <div style="display: inline-flex">
                            <svg width="32" height="32">
                                <image xlink:href="https://visualpharm.com/assets/165/Sort-595b40b85ba036ed117dbb04.svg" width="32" height="32"/>
                            </svg>
                            <div style="padding-top: 8px"> Wins </div>
                        </div></td>
                        <td>                   <div style="display: inline-flex">
                            <svg width="32" height="32">
                                <image xlink:href="https://visualpharm.com/assets/165/Sort-595b40b85ba036ed117dbb04.svg" width="32" height="32"/>
                            </svg>
                            <div style="padding-top: 8px"> Losses </div>
                        </div></td>
                        <td>
                            <div style="display: inline-flex; width: 200px">
                            <svg width="32" height="32">
                                <image xlink:href="https://visualpharm.com/assets/165/Sort-595b40b85ba036ed117dbb04.svg" width="32" height="32"/>
                            </svg>
                            <div style="padding-top: 8px"> Total Games </div>
                        </div></td>
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
            <tree
            ></tree>
            <soccer-table>
            </soccer-table>
        </div>
    </div>

</template>

<script>

    import Tree from './tree.vue'
    import soccerTable from './table.vue'

    export default {

        components: {
            Tree,
            soccerTable,
        },

        data() {
            return {

            }
        },
        methods: {

        },

    }
</script>

<style scoped>

    table {
        border-collapse: collapse;
        font: 14px sans-serif;
    }
    th {
        font-weight: normal;
        text-align: right;
        padding-right: 6px;
        min-width: 125px;
    }
    thead td, th {
        cursor: s-resize;
    }
    tbody tr:first-child td {
        padding-top: 5px;
    }
    tbody th {
        cursor: pointer;
        font-weight: bold;
    }
    .aggregate {
        color: #af161e;
        font-weight: bold;
    }
    .game {
        color: #b1b1b1;
    }
    .flex{
        display: inline-flex;
    }
    tbody td {
        padding-right: 5px;
        padding-left: 5px;
        border-left: solid 1px #000;
        color: black
    }
    tbody tr:hover {
        color: #feebe2;
    }
    tbody tr .game {
        background-color: #f0f0f0;
    }
    .label {
        fill: #ffffff;
        font: 14px sans-serif;
    }
    @font-face {
        font-family: 'font1';
        src: url('assets/font1.ttf');
    }
    @font-face {
        font-family: 'font2';
        src: url('assets/font2.ttf');
    }
    * {
        font-family: 'font1', serif;
    }
    header {
        padding: 0.5em;
        text-align: center;
        height: 100px;
    }
    #logo {
        float: right;
        height: 100px;
    }
    .goalBar {
        opacity: 0.6;
    }
    .goalCircle {
        stroke-width: 3px;
        r: 5px;
    }
    .node circle {
        fill: #be2714;;
    }
    .node text {
        font: 14px sans-serif;
    }
    .winner circle {
        fill: #364e74;
    }
    .loser text {
        text-shadow: 0 1px 0 #fff, 0 -1px 0 #fff, 1px 0 0 #fff, -1px 0 0 #fff;
    }
    .link {
        fill: none;
        stroke: rgb(36, 33, 33);
        stroke-opacity: 0.5;
        stroke-width: 3px;
    }
    .selected {
        stroke: #e20e0e;
        stroke-width: 6px;
    }
    .selectedLabel {
        fill: #e20e0e;
        font-weight: 300;
    }
    .view {
        width: 750px;
        padding: 0.5em;
        float: left;
        height: 73vh;
        overflow-y: scroll
    }
    .barText {
        fill: black;
    }
    .chart .barText {
        text-anchor: start;
        mix-blend-mode: difference;
    }
    #goalHeader {
        width: 200px;
        height: 50px;
        margin: 10px;
    }
</style>

