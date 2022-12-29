<template>
  <div
    v-if="!readonly"
    class="sfcAddNode"
    :class="{ vertical: vertical }"
    @mouseenter.stop="onMouseenter"
    @mouseleave.stop="onMouseleave"
  >
    <div
      class="sfcAddNodeBtn"
      :class="[type]"
      @mouseenter="onAddBtnMouseenter"
      @mouseleave="onAddBtnMouseleave"
    >
      <svg
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <path
          d="M896 480H544.8V128h-65.6v352H128v66.4h351.2V896h65.6V546.4H896z"
        ></path>
      </svg>
      <div
        class="sfcNodeTypePopover"
        :class="{ show: showNodeTypePopover }"
        :style="nodeTypePopoverStyle"
        ref="nodeTypePopover"
      >
        <SFCNodeTypeContent @click="onNodeTypeClick"></SFCNodeTypeContent>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from '../constant'
import emitter from '../emit'

export default {
  name: 'SFCAddNode',
  props: {
    nodeList: {
      type: [Array, null],
      default() {
        return null
      }
    },
    nodeData: {
      type: Object,
      default: null
    },
    btnType: {
      type: String,
      default: '' // dot、normal
    }
  },
  data() {
    return {
      readonly: store.readonly,
      vertical: store.vertical,
      addNodeBtnType: '',
      showNodeTypePopover: false,
      nodeTypePopoverStyle: {}
    }
  },
  computed: {
    type() {
      return this.addNodeBtnType === 'normal'
        ? this.addNodeBtnType
        : this.btnType || this.addNodeBtnType
    }
  },
  watch: {
    showNodeTypePopover(val) {
      if (val) {
        this.$nextTick(() => {
          this.setNodeTypePopoverStyle()
        })
      } else {
        setTimeout(() => {
          this.resetNodeTypePopoverStyle()
        }, 300)
      }
    }
  },
  created() {
    this.resetNodeTypePopoverStyle()
  },
  methods: {
    setNodeTypePopoverStyle() {
      let el = this.$refs.nodeTypePopover
      if (!el) {
        return
      }
      let elWidth = el.offsetWidth
      let elHeight = el.offsetHeight
      let { left, top } = el.getBoundingClientRect()
      let windowWidth = window.innerWidth
      let windowHeight = window.innerHeight
      let style = {}
      style[top + elHeight > windowHeight ? 'bottom' : 'top'] = 0
      style[left + elWidth > windowWidth ? 'right' : 'left'] = 42 + 'px'
      this.nodeTypePopoverStyle = style
    },

    resetNodeTypePopoverStyle() {
      this.nodeTypePopoverStyle = {
        left: '42px',
        top: 0
      }
    },

    onMouseenter() {
      this.addNodeBtnType = 'normal'
    },

    onMouseleave() {
      this.addNodeBtnType = ''
    },

    onAddBtnMouseenter() {
      this.showNodeTypePopover = true
    },

    onAddBtnMouseleave() {
      this.showNodeTypePopover = false
    },

    onNodeTypeClick(...args) {
      emitter.emit('add-node-type-click', this.nodeList, this.nodeData, ...args)
      this.showNodeTypePopover = false
    }
  }
}
</script>

<style lang="less" scoped>
.sfcAddNode {
  position: absolute;
  right: 0;
  top: 0;
  width: 65px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &.vertical {
    right: auto;
    top: auto;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 65px;
  }

  .sfcAddNodeBtn {
    position: relative;
    background: #0089ff;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transform: scale(0);
    transition: all 0.3s;
    z-index: 2;

    &:hover {
      z-index: 3;
    }

    &.dot {
      transform: scale(0.3);

      svg {
        transform: scale(0);
      }
    }

    &.normal {
      transform: scale(1);

      svg {
        transform: scale(1);
      }
    }

    svg {
      fill: #fff;
      width: 24px;
      height: 24px;
      transform: scale(0);
    }
  }

  .sfcNodeTypePopover {
    position: absolute;
    visibility: hidden;
    transform: scale(0);
    transition: all 0.3s;

    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 0;
      width: 20px;
      height: 100%;
    }

    &::before {
      left: -20px;
    }

    &::after {
      right: -20px;
    }

    &.show {
      visibility: visible;
      transform: scale(1);
    }
  }
}
</style>
