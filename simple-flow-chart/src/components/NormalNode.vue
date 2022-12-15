<template>
  <div class="sfcNormalNodeContainer">
    <div class="sfcNormalNodeWrap">
      <div class="sfcNormalNodeContent">
        <div class="sfcNormalNodeTitle">
          <div class="sfcNormalNodeTitleText">{{ data.title }}</div>
        </div>
      </div>
      <ArrowLine></ArrowLine>
    </div>
    <Node v-for="node in data.nodeList" :key="node.id" :data="node"></Node>
  </div>
</template>

<script>
import ArrowLine from './ArrowLine.vue'

/**
 * @Author: 王林25
 * @Date: 2022-12-15 09:33:21
 * @Desc: 普通节点
 */
export default {
  name: 'NormalNode',
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
.sfcNormalNodeContainer {
  position: relative;
  display: flex;
  flex-shrink: 0;
  align-items: center;

  .sfcNormalNodeWrap {
    display: flex;
    align-items: center;

    .sfcNormalNodeContent {
      min-width: 200px;
      height: 70px;
      padding: 5px 10px 8px;
      border: 2px solid transparent;
      border-radius: 8px;
      box-shadow: 0 1px 4px 0 rgba(10, 30, 65, 0.16);
      transition: all 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
      background-color: #fff;
      border-radius: 8px;
      cursor: pointer;

      .sfcNormalNodeTitle {
        position: relative;
        display: flex;
        align-items: center;
        border-radius: 4px 4px 0 0;
        color: #1f1f1f;
        cursor: pointer;
        font-size: 14px;
        text-align: left;

        .sfcNormalNodeTitleText {
          margin-left: 6px;
          color: #1f1f1f;
          font-size: 14px;
          font-weight: 600;
        }
      }
    }
  }
}
</style>
