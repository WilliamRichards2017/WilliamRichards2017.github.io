<template>
  <div class="pedigree">


    <button id='advance' title='Advance Layout One Increment'>
      <i class='fa fa-step-forward'></i>
    </button>
    <button id='slow' title='Run Layout in Slow Motion'>
      <i class='fa fa-play'></i>
    </button>
    <button id='play' title='Run Layout at Full Speed'>
      <i class='fa fa-fast-forward'></i>
    </button>
    <button id='reset' title='Reset Layout to Beginning'>
      <i class='fa fa-undo'></i>
    </button>

  </div>

</template>

<script>
  export default {

    data (){ return {
      currentTab: 'home',
      tabs: ['home', 'datamining', 'pedigree']
      }
    },
    computed: {
      currentTabComponent: function () {
        return 'tab-' + this.currentTab
      }
    }
  }
</script>
