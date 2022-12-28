<template>
  <div class="sfcStartNodeContainer">
    <div class="sfcStartNodeContent">{{ data.title }}</div>
    <SFCArrowLine></SFCArrowLine>
    <SFCAddNode
      :nodeList="nodeList"
      :nodeData="data"
      :btnType="isMouseEnter ? 'dot' : ''"
    ></SFCAddNode>
  </div>
</template>

<script>
import ArrowLine from './ArrowLine.vue'
import AddNode from './AddNode.vue'

export default {
  name: 'SFCStartNode',
  components: {
    [ArrowLine.name]: ArrowLine,
    [AddNode.name]: AddNode
  },
  props: {
    nodeList: {
      type: [Array, null],
      default() {
        return null
      }
    },
    data: {
      type: Object,
      default: null
    },
    isMouseEnter: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="less" scoped>
.sfcStartNodeContainer {
  display: flex;
  align-items: center;

  .sfcStartNodeContent {
    width: 90px;
    height: 40px;
    border-radius: 30px;
    box-shadow: 0 1px 5px 0 rgba(10, 30, 65, 0.08);
    color: #fff;
    line-height: 40px;
    text-align: center;
    background: #2c2c2c;
  }
}
</style>
