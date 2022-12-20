<template>
  <div class="sfcConditionNodeContainer">
    <div class="sfcConditionNodeItemList">
      <div
        class="sfcConditionNodeItem"
        v-for="node in data.children"
        :key="node.id"
      >
        <!-- 左侧的竖线 -->
        <div
          class="sfcConditionNodeItemLine sfcConditionNodeItemFirstLine"
        ></div>
        <!-- 右侧的竖线 -->
        <div
          class="sfcConditionNodeItemLine sfcConditionNodeItemLastLine"
        ></div>
        <!-- 连接竖线和节点的水平线 -->
        <div class="sfcConditionNodeItemLinkLine"></div>
        <div class="sfcConditionNodeItemNodeWrap">
          <Node :data="node"></Node>
          <!-- 连接较短分支和分支整体右侧的水平线 -->
          <div class="sfcConditionNodeItemLinkCrossLine"></div>
        </div>
      </div>
    </div>
    <ArrowLine></ArrowLine>
  </div>
</template>

<script>
import ArrowLine from './ArrowLine.vue'

/**
 * @Author: 王林25
 * @Date: 2022-12-15 09:33:25
 * @Desc: 分支节点
 */
export default {
  name: 'ConditionNode',
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
.sfcConditionNodeContainer {
  display: flex;
  align-items: center;

  .sfcConditionNodeItemList {
    
    .sfcConditionNodeItem {
      padding: 30px;
      padding-right: 0;
      position: relative;

      // 中间的竖线高度100%
      .sfcConditionNodeItemLine {
        position: absolute;
        height: 100%;
        width: 2px;
        left: 0px;
        top: 0;
        background-color: #dedede;
        
        &.sfcConditionNodeItemLastLine {
          left: 100%;
        }
      }

        // 头尾的竖线高度50%
      &:first-of-type {
        // 头部的竖线距顶部50%
        > .sfcConditionNodeItemLine {
          top: 50%;
          height: 50%;
        }
      }

      &:last-of-type {
        // 尾部的竖线距顶部0
        > .sfcConditionNodeItemLine {
          top: 0;
          height: 50%;
        }
      }

      // 连接竖线和节点的水平线
      .sfcConditionNodeItemLinkLine {
        position: absolute;
        width: 30px;
        height: 2px;
        left: 0px;
        top: 50%;
        transform: translateY(-50%);
        background-color: #dedede;
      }

      .sfcConditionNodeItemNodeWrap {
        display: flex;
        align-items: center;

        // 连接较短分支和分支整体右侧的水平线
        .sfcConditionNodeItemLinkCrossLine {
          height: 2px;
          flex-grow: 1;
          background-color: #dedede;
        }
      }
    }
  }
}
</style>
