<template>
  <div class="sfcEndNodeContainer">{{ data.title }}</div>
</template>

<script>
export default {
  name: 'SFCEndNode',
  props: {
    data: {
      type: Object,
      default: null
    }
  }
}
</script>

<style lang="less" scoped>
.sfcEndNodeContainer {
  width: 90px;
  height: 40px;
  border-radius: 30px;
  box-shadow: 0 1px 5px 0 rgba(10, 30, 65, 0.08);
  color: #fff;
  line-height: 40px;
  text-align: center;
  background: #6e6e6e;
}
</style>
