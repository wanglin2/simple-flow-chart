<template>
  <div class="sfcNodeContainer">
    <!-- 开始节点 -->
    <StartNode v-if="data.type === 'start'" :data="data"></StartNode>
    <!-- 结束节点 -->
    <EndNode v-else-if="data.type === 'end'" :data="data"></EndNode>
    <!-- 分支节点 -->
    <ConditionNode
      v-else-if="data.type === 'condition'"
      :data="data"
    ></ConditionNode>
    <!-- 普通节点 -->
    <NormalNode v-else :data="data"></NormalNode>
  </div>
</template>

<script>
/**
 * @Author: 王林25
 * @Date: 2022-12-15 09:33:17
 * @Desc: 节点
 */
export default {
  name: 'Node',
  props: {
    data: {
      type: Object,
      default: null
    }
  }
}
</script>

<style lang="less" scoped>
.sfcNodeContainer {
  // flex-shrink: 0;
}
</style>
