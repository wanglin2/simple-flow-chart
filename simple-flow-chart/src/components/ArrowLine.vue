<template>
  <div class="sfcArrowLine" :class="{ showArrow: showArrow }"></div>
</template>

<script>
/**
 * @Author: 王林25
 * @Date: 2022-12-15 16:34:15
 * @Desc: 箭头线
 */
export default {
  name: 'ArrowLine',
  props: {
    showArrow: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="less" scoped>
.sfcArrowLine {
  position: relative;
  height: 100%;
  width: 65px;
  user-select: none;

  &:before {
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    transform: translateY(-50%);
    height: 2px;
    width: 100%;
    background-color: #dedede;
    content: '';
  }

  &.showArrow {
    &:after {
      position: absolute;
      width: 0;
      height: 0;
      border-left: 10px solid #dedede;
      border-top: 6px solid transparent;
      border-bottom: 6px solid transparent;
      content: '';
      right: 0;
      top: 0;
      transform: translateY(-50%);
    }
  }
}
</style>
