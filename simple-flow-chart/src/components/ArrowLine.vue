<template>
  <div
    class="sfcArrowLine"
    :class="{ showArrow: showArrow, vertical: vertical }"
  ></div>
</template>

<script>
import { store } from '../constant'

/**
 * @Author: 王林25
 * @Date: 2022-12-15 16:34:15
 * @Desc: 箭头线
 */
export default {
  name: 'SFCArrowLine',
  props: {
    showArrow: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      vertical: store.vertical
    }
  }
}
</script>

<style lang="less" scoped>
.sfcArrowLine {
  position: relative;
  width: 65px;
  user-select: none;

  &.vertical {
    width: auto;
    height: 65px;

    &::before {
      width: 2px;
      height: 100%;
      transform: translateX(-50%);
    }

    &.showArrow {
      &::after {
        right: auto;
        bottom: 0;
        top: auto;
        border-top: 10px solid #dedede;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-bottom: none;
        transform: translateX(-50%);
      }
    }
  }

  &::before {
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
    &::after {
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
