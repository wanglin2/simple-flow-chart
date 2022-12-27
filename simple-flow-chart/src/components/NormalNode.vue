<template>
  <div class="sfcNormalNodeContainer">
    <div class="sfcNormalNodeWrap">
      <div
        class="sfcNormalNodeContent"
        @mouseenter.stop="onContentMouseenter"
        @mouseleave.stop="onContentMouseleave"
        @click.stop="onContentClick"
      >
        <div class="sfcNormalNodeTitle">
          {{ data.title || '' }}
        </div>
        <div class="sfcNormalNodeData">
          <div class="sfcNormalNodeDataText">{{ data.content || '' }}</div>
          <img
            class="sfcNormalNodeDataIcon"
            src="../assets/svg/arrow.svg"
            alt=""
          />
        </div>
      </div>
      <ArrowLine></ArrowLine>
      <AddNode
        :nodeList="nodeList"
        :nodeData="data"
        :btnType="isMouseEnter ? 'dot' : ''"
      ></AddNode>
    </div>
    <Node
      v-for="node in data.nodeList || []"
      :key="node.id"
      :nodeList="data.nodeList"
      :data="node"
      :isMouseEnter="isMouseEnter"
    ></Node>
  </div>
</template>

<script>
import ArrowLine from './ArrowLine.vue'
import AddNode from './AddNode.vue'
import emitter from '../emit'

/**
 * @Author: 王林25
 * @Date: 2022-12-15 09:33:21
 * @Desc: 普通节点
 */
export default {
  name: 'NormalNode',
  components: {
    ArrowLine,
    AddNode
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
    return {}
  },
  methods: {
    onContentMouseenter() {},

    onContentMouseleave() {},

    onContentClick() {
      emitter.emit('node-content-click', this.data, this.nodeList)
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
    position: relative;
    display: flex;
    align-items: center;

    .sfcNormalNodeContent {
      width: 200px;
      min-height: 70px;
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
        cursor: pointer;
        font-size: 14px;
        text-align: left;
        color: #1f1f1f;
        font-weight: 600;
        word-break: break-all;
        min-height: 20px;
      }

      .sfcNormalNodeData {
        display: flex;
        min-height: 32px;
        align-items: center;
        justify-content: space-between;
        padding: 4px 8px;
        margin-top: 10px;
        background: rgba(0, 0, 0, 0.03);
        border-radius: 4px;

        .sfcNormalNodeDataText {
          color: #111f2c;
          font-size: 14px;
          line-height: 32px;
          word-break: break-all;
        }

        .sfcNormalNodeDataIcon {
          width: 20px;
        }
      }
    }
  }
}
</style>
