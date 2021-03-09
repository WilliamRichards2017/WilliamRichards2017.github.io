<template>
  <div>
<div>


<!--  style="position:absolute; top:0px; left:0px; height:35px; right:0px;overflow:hidden;"-->
  <div id="tab-header"class="nav nav-tabs" style="height:35px;overflow:hidden;">
  <li
    v-for="tab in tabs"
    v-bind:key="tab"
    v-bind:class="['nav-link', { active: currentTab === tab }]"
    v-on:click="currentTab = tab"
  >{{ tab }}</li>
    </div>


  <div class="box" style="position:absolute; top:35px; bottom:100px; left:0px; right:0px; overflow:auto; padding-right: 20px; padding-left: 20px">
    <keep-alive>

    <component
    v-bind:is="currentTabComponent"
    class="tab"
  ></component>
    </keep-alive>
</div>
<contact style="position:absolute; bottom:0px; height:100px; left:0px; right:0px; overflow:hidden;">
</contact>
</div>
</div>

</template>

<script>
export default {

  data (){ return {
    currentTab: 'Home',
    tabs: ['Home', 'Data Visualization', 'Games']
    }
  },
  computed: {
    currentTabComponent: function () {
      return 'tab-' + this.currentTab
    }
  }
}
</script>

<style>

.nav-link:hover {
  background: #e0e0e0 !important;
}
.nav-link.active {
  background: #6ed3cf !important;
  border-color: #277371 !important
}

</style>
