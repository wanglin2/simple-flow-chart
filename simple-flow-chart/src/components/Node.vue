<template>
  <div
    class="sfcNodeContainer"
    @mouseenter.stop="onMouseenter"
    @mouseleave.stop="onMouseleave"
  >
    <!-- 开始节点 -->
    <SFCStartNode
      v-if="data.type === 'start'"
      :nodeList="nodeList"
      :data="data"
      :isMouseEnter="isMouseEnter || isCurrentMouseEnter"
    ></SFCStartNode>
    <!-- 结束节点 -->
    <SFCEndNode v-else-if="data.type === 'end'" :data="data"></SFCEndNode>
    <!-- 分支节点 -->
    <SFCConditionNode
      v-else-if="data.type === 'condition'"
      :nodeList="nodeList"
      :data="data"
      :isMouseEnter="isMouseEnter || isCurrentMouseEnter"
    ></SFCConditionNode>
    <!-- 普通节点 -->
    <SFCNormalNode
      v-else
      :nodeList="nodeList"
      :childrenList="childrenList"
      :data="data"
      :belongConditionNodeData="belongConditionNodeData"
      :isMouseEnter="isMouseEnter || isCurrentMouseEnter"
    ></SFCNormalNode>
  </div>
</template>

<script>
/**
 * @Author: 王林25
 * @Date: 2022-12-15 09:33:17
 * @Desc: 节点
 */
export default {
  name: 'SFCNode',
  props: {
    nodeList: {
      type: [Array, null],
      default() {
        return null
      }
    },
    childrenList: {
      type: [Array, null],
      default() {
        return null
      }
    },
    data: {
      type: Object,
      default: null
    },
    belongConditionNodeData: {
      type: Object,
      default: null
    },
    isMouseEnter: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isCurrentMouseEnter: false
    }
  },
  methods: {
    onMouseenter() {
      this.isCurrentMouseEnter = true
    },

    onMouseleave() {
      this.isCurrentMouseEnter = false
    }
  }
}
</script>

<style lang="less" scoped>
.sfcNodeContainer {
  // flex-shrink: 0;
  position: relative;
}
</style>
