<template>
  <div class="sfcContainer">
    <div class="sfcContent">
      <Node v-for="node in flowChart" :key="node.id" :data="node"></Node>
    </div>
  </div>
</template>

<script>
import Node from './components/Node.vue'
import example from '../exmaples/5'

export default {
  name: 'SimpleFlowChart',
  components: {
    Node
  },
  data() {
    return {
      flowChart: example
    }
  }
}
</script>

<style lang="less" scoped>
.sfcContainer {
  width: 100%;
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.03);

  * {
    box-sizing: border-box;
  }

  .sfcContent {
    display: flex;
    align-items: center;
    padding: 20px;
    min-width: 100%;
    min-height: 100%;
    width: max-content;
    height: max-content;
  }
}
</style>
