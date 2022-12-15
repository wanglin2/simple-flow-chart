<template>
  <div class="sfcStartNodeContainer">
    <div class="sfcStartNodeContent">{{ data.title }}</div>
    <ArrowLine></ArrowLine>
  </div>
</template>

<script>
import ArrowLine from './ArrowLine.vue'

export default {
  name: 'StartNode',
  components: {
    ArrowLine
  },
  props: {
    data: {
      type: Object,
      default: null
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
