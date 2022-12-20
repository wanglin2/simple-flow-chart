<template>
  <div class="sfcContainer">
    <div class="sfcContent">
      <Node v-for="node in data" :key="node.id" :data="node"></Node>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SimpleFlowChart',
  props: {
    data: {
      type: Array,
      default() {
        return []
      }
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
