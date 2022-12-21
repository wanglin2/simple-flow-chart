<template>
  <div
    class="sfcAddNode"
    @mouseenter.stop="onMouseenter"
    @mouseleave.stop="onMouseleave"
  >
    <div class="sfcAddNodeBtn" :class="[type]">
      <svg
        t="1671180002992"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="873"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <path
          d="M896 480H544.8V128h-65.6v352H128v66.4h351.2V896h65.6V546.4H896z"
          p-id="874"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddNode',
  props: {
    btnType: {
      type: String,
      default: '' // dot、normal
    }
  },
  data() {
    return {
      addNodeBtnType: ''
    }
  },
  computed: {
    type() {
      return this.addNodeBtnType === 'normal'
        ? this.addNodeBtnType
        : this.btnType || this.addNodeBtnType
    }
  },
  methods: {
    onMouseenter() {
      this.addNodeBtnType = 'normal'
    },

    onMouseleave() {
      this.addNodeBtnType = ''
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

  .sfcAddNodeBtn {
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
    overflow: hidden;
    transition: all 0.3s;

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
}
</style>
