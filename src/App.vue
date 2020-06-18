<template>
  <div id="app">
    <div id="content-wrap">
      <div id="wrapper">
    </div>
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


    a{
      cursor: pointer;
    }
  #wrapper {
    margin:0 auto;
    position: relative;
    width:100%;
    justify-content: center;
  }





  #content-wrap {
    padding-bottom: 150px;    /* Footer height */
  }
   /* Footer height */


  /* Global Styling */


  /* unvisited link */

  a {
    color:#4fc9c5;
    text-decoration:none;
    font-size: 16px;
    font-weight: bold;
  }


  /* mouse over link */
  a:hover {
    color:#9068be !important;
    text-decoration:none;
    text-shadow: 0px 0px 0px transparent !important;

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



</style>
