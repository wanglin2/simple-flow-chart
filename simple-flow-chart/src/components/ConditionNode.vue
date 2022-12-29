<template>
  <div class="sfcConditionNodeContainer" :class="{ vertical: vertical }">
    <div
      class="sfcConditionAddBtn"
      v-if="!readonly"
      @click="onAddConditionBranchClick"
    >
      添加条件
    </div>
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
          <SFCNode
            :nodeList="null"
            :childrenList="data.children"
            :data="node"
            :belongConditionNodeData="data"
            :isMouseEnter="isMouseEnter"
          ></SFCNode>
          <!-- 连接较短分支和分支整体右侧的水平线 -->
          <div class="sfcConditionNodeItemLinkCrossLine"></div>
        </div>
      </div>
    </div>
    <SFCArrowLine></SFCArrowLine>
    <SFCAddNode
      :nodeList="nodeList"
      :nodeData="data"
      :btnType="isMouseEnter ? 'dot' : ''"
    ></SFCAddNode>
  </div>
</template>

<script>
import ArrowLine from './ArrowLine.vue'
import AddNode from './AddNode.vue'
import emitter from '../emit'
import { store } from '../constant'

/**
 * @Author: 王林25
 * @Date: 2022-12-15 09:33:25
 * @Desc: 分支节点
 */
export default {
  name: 'SFCConditionNode',
  components: {
    [ArrowLine.name]: ArrowLine,
    [AddNode.name]: AddNode
  },
  props: {
    nodeList: {
      type: [Array, null],
      default() {
        return null
      }
    },
    data: {
      type: Object,
      default: null
    },
    isMouseEnter: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      readonly: store.readonly,
      vertical: store.vertical
    }
  },
  methods: {
    onAddConditionBranchClick() {
      emitter.emit('add-condition-branch-click', this.data)
    }
  }
}
</script>

<style lang="less" scoped>
.sfcConditionNodeContainer {
  position: relative;
  display: flex;
  align-items: center;

  &.vertical {
    flex-direction: column;

    .sfcConditionAddBtn {
      left: 50%;
      top: -18px;
      transform: translateX(-50%);
      width: auto;
      height: 36px;
      padding-top: 0;
      padding-bottom: 0;
      line-height: 32px;
    }

    .sfcConditionNodeItemList {
      display: flex;

      .sfcConditionNodeItem {
        padding-right: 30px;
        padding-bottom: 0;

        // 中间的竖线高度100%
        .sfcConditionNodeItemLine {
          height: 2px;
          width: 100%;
          top: 0px;
          left: 0;

          &.sfcConditionNodeItemLastLine {
            left: 0;
            top: 100%;
          }
        }

        // 头尾的竖线高度50%
        &:first-of-type {
          // 头部的竖线距顶部50%
          > .sfcConditionNodeItemLine {
            left: 50%;
            width: 50%;
            height: 2px;
            top: 0;

            &.sfcConditionNodeItemLastLine {
              top: 100%;
            }
          }
        }

        &:last-of-type {
          // 尾部的竖线距顶部0
          > .sfcConditionNodeItemLine {
            left: 0;
            width: 50%;
            height: 2px;
            top: 0;

            &.sfcConditionNodeItemLastLine {
              top: 100%;
            }
          }
        }

        // 连接竖线和节点的水平线
        .sfcConditionNodeItemLinkLine {
          height: 30px;
          width: 2px;
          top: 0px;
          left: 50%;
          transform: translateX(-50%);
        }

        .sfcConditionNodeItemNodeWrap {
          flex-direction: column;
          height: 100%;

          // 连接较短分支和分支整体右侧的水平线
          .sfcConditionNodeItemLinkCrossLine {
            width: 2px;
          }
        }
      }
    }
  }

  .sfcConditionAddBtn {
    position: absolute;
    left: -18px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
    width: 36px;
    display: flex;
    flex-wrap: wrap;
    border: 2px solid #dedede;
    background: #fff;
    border-radius: 18px;
    color: #222;
    cursor: pointer;
    font-size: 12px;
    padding: 10px;
    text-align: center;
  }

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
