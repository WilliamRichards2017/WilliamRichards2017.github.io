<template>
<div class="tab">
  <button
    v-for="tab in tabs"
    v-bind:key="tab"
    v-bind:class="['tab-button', { active: currentTab === tab }]"
    v-on:click="currentTab = tab"
  >{{ tab }}</button>

<div class="box">
  <component
    v-bind:is="currentTabComponent"
    class="tab"
  ></component>
<contact>
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
