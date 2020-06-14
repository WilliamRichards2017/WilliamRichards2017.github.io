<template>
  <div>
<div class="tab">

  <div id="tab-header" style="position:absolute; top:0px; left:0px; height:35px; right:0px;overflow:hidden;">
  <button
    v-for="tab in tabs"
    v-bind:key="tab"
    v-bind:class="['tab-button', { active: currentTab === tab }]"
    v-on:click="currentTab = tab"
  >{{ tab }}</button>
    </div>

<div class="box" style="position:absolute; top:35px; bottom:100px; left:0px; right:0px; overflow:auto; padding-right: 20px; padding-left: 20px">
  <component
    v-bind:is="currentTabComponent"
    class="tab"
  ></component>
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
    tabs: ['Home', 'Data Visualization']
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


.tab-button {
  padding: 6px 10px;

  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: 1px;
  margin-right: 0px;

  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #6ed3cf;
}
.tab {
  border: 1px;
  padding: 1px;
}

</style>
