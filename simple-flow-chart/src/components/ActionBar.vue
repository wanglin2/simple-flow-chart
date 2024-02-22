<template>
  <div class="sfcActionBar">
    <div class="sfcActionScale">
      <div class="sfcActionScaleBtn" @click="scaleIn">
        <svg
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M580.722174 437.990403 580.722174 78.171384 436.794158 78.171384 436.794158 437.990403 76.975139 437.990403 76.975139 581.918419 436.794158 581.918419 436.794158 941.737438 580.722174 941.737438 580.722174 581.918419 940.542216 581.918419 940.542216 437.990403Z"
          ></path>
        </svg>
      </div>
      <div class="sfcActionScaleNum">{{ scale.toFixed(0) }}%</div>
      <div class="sfcActionScaleBtn" @click="scaleOut">
        <svg
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M587.229378 437.990403 580.722174 437.990403 76.975139 437.990403 76.975139 581.918419 580.722174 581.918419 587.229378 581.918419 940.542216 581.918419 940.542216 437.990403Z"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SFCActionBar',
  props: {
    scale: {
      type: Number
    }
  },
  methods: {
    scaleIn() {
      this.$emit('update:scale', this.scale + 10)
    },

    scaleOut() {
      if (this.scale <= 0) {
        return
      }
      this.$emit('update:scale', this.scale - 10)
    }
  }
}
</script>

<style lang="less" scoped>
.sfcActionBar {
  position: absolute;
  right: 30px;
  top: 12px;
  z-index: 3;
  user-select: none;

  .sfcActionScale {
    display: flex;
    align-items: center;

    .sfcActionScaleBtn {
      width: 30px;
      height: 30px;
      background-color: #fff;
      box-shadow: 0 1px 5px 0 rgba(10, 30, 65, 0.08);
      border-radius: 6px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      svg {
        width: 20px;
        height: 20px;
        fill: rgba(0, 0, 0, 0.85);
      }
    }

    .sfcActionScaleNum {
      width: 50px;
      color: rgba(0, 0, 0, 0.85);
      font-size: 14px;
      text-align: center;
    }
  }
}
</style>
