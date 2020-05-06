<template>
  <div id="app">
    <div id="wrapper">
      <tab/>
    </div>
  </div>
</template>

<script>

  import topNav from './components/topNav.vue'
  import mainContent from './components/mainContent.vue'
  import dataMining from './components/dataMining.vue'
  import contact from './components/contact.vue'
  import tab from './components/tab.vue'
  import dataViz from './components/dataViz.vue'


  export default {
    name: 'App',
    components: {
      tab, topNav, mainContent, contact, dataMining, dataViz
    }
  }
</script>

<style>


  p {
    color:#656668
  }

  #wrapper {
    margin:0 auto;
    width:100%;

  }

  #header {
    margin:0 1px;
  }

  #bg {
    height:36px;
  }

  .box {
    padding-top: .5em;
    padding:15px;
    outline: 1px solid #f0e9eb;

  }

  .sidebar {
    width:218px;
    margin:0 auto;
    padding:10px 25px;
  }

  #footer {
    background:#f7f7f7;
    border-top:1px solid #f0e9eb;
    padding:10px 15px;
    clear:both;
  }

  /* Global Styling */


  /* unvisited link */

  a {
    color:black;
    text-decoration:none;
  }
  a:link {
    color:black;
    text-decoration:none;
  }

  /* visited link */
  a:visited {
    color:black;
    text-decoration:none;
  }

  /* mouse over link */
  a:hover {
    color:#6ed3cf;
    text-decoration:none;

  }

  /* selected link */
  a:active {
    color: darkgrey;
  }

  h1 {
    color:#9068be;
    margin:0 0 10px;
    padding-top:.1em;
    padding-bottom:.2em;
    font:normal 17px Georgia, serif;
    border-bottom:1px solid #efece7;
  }

  h2 {
    color:#9068be;
    margin:20px 0 10px;
    padding-bottom:10px;
    font:normal 17px Georgia, serif;
    border-bottom:1px solid #efece7;
  }

  h3 {
    margin:10px 0;
    padding-bottom:10px;
    font:bold 14px Arial, Helvetica, sans-serif;
    border-bottom:1px solid #efece7;
  }

  ul {
    padding:0;
    margin:0 0 0 17px;
  }

  #nav {
    background:#6ed3cf;
    text-align:right;
    color:#f6dde3;
    padding: 10px;
  }


  .row {
    float: left;
  }

  #logo {
    margin-bottom:20px;
    font:normal 2em, Georgia, serif;
    color:#9068be;
  }


</style>
color:#9068be;
