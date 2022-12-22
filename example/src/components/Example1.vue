<template>
  <div class="flowChartContainer">
    <SimpleFlowChart v-model="data"></SimpleFlowChart>
  </div>
</template>

<script>
import example from '../exmaples/default'

export default {
  data() {
    return {
      data: example
    }
  }
}
</script>

<style lang="less" scoped>
.flowChartContainer {
  width: 100%;
  height: 100%;
}
</style>
