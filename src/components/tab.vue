<template>
  <div>
    <nav id="tab-header" class="nav nav-tabs" aria-label="Main Navigation" role="navigation">
      <div
        v-for="tab in tabs"
        :key="tab"
        :class="['nav-item', { active: currentTab === tab }]"
        @click="currentTab = tab"
      >{{ tab }}</div>
    </nav>

    <main class="box" aria-label="Main Content" role="main">
      <keep-alive>
        <component
          :is="currentTabComponent"
          class="tab"
        ></component>
      </keep-alive>
    </main>
    
    <footer style="position:absolute; bottom:0px; left:0px; right:0px; overflow:hidden;" aria-label="Footer" role="contentinfo">
      <contact></contact>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentTab: 'Home',
      tabs: ['Home', 'Data Visualization', 'Games']
    }
  },
  computed: {
    currentTabComponent() {
      return 'tab-' + this.currentTab
    }
  }
}
</script>

<style>
.box {
  position: absolute;
  top: 50px;
  bottom: 68px;
  left: 0px;
  right: 0px;
  overflow: auto;
  padding-right: 20px;
  padding-left: 20px;
  z-index: -1;
}

.nav-tabs {
  display: flex;
  border-bottom: 1px solid #ddd;
  padding: 0;
  margin: 0;
  list-style: none;
}

.nav-item {
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  font-weight: 500;
  color: #444;
  transition: all 0.2s ease;
  border-radius: 6px 6px 0 0;
  margin-right: 10px;
}

.nav-item:hover {
  color: #2a70c2;
  background: #f8f9fa;
}

.nav-item.active {
  color: #2a70c2;
  border-bottom: 3px solid #2a70c2;
}

#tab-header {
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
</style>