<template>
  <div class="sfcNormalNodeContainer">
    <div class="sfcNormalNodeWrap">
      <div
        class="sfcNormalNodeContentWrap"
        @mouseenter.stop="onContentMouseenter"
        @mouseleave.stop="onContentMouseleave"
        @click.stop="onContentClick"
      >
        <SFCNodeContent :data="data"></SFCNodeContent>
        <SFCDeleteNode
          v-if="showDeleteBtn && !readonly"
          @click="onDeleteNode"
        ></SFCDeleteNode>
      </div>
      <SFCArrowLine></SFCArrowLine>
      <SFCAddNode
        :nodeList="nodeList"
        :nodeData="data"
        :btnType="isMouseEnter ? 'dot' : ''"
      ></SFCAddNode>
    </div>
    <SFCNode
      v-for="node in data.nodeList || []"
      :key="node.id"
      :nodeList="data.nodeList"
      :data="node"
      :isMouseEnter="isMouseEnter"
    ></SFCNode>
  </div>
</template>

<script>
import ArrowLine from './ArrowLine.vue'
import AddNode from './AddNode.vue'
import emitter from '../emit'
import { store } from '../constant'

/**
 * @Author: 王林25
 * @Date: 2022-12-15 09:33:21
 * @Desc: 普通节点
 */
export default {
  name: 'SFCNormalNode',
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
    childrenList: {
      type: [Array, null],
      default() {
        return null
      }
    },
    data: {
      type: Object,
      default: null
    },
    belongConditionNodeData: {
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
      showDeleteBtn: false
    }
  },
  methods: {
    onContentMouseenter() {
      this.showDeleteBtn = true
    },

    onContentMouseleave() {
      this.showDeleteBtn = false
    },

    onContentClick() {
      emitter.emit('node-content-click', this.data, this.nodeList)
    },

    onDeleteNode() {
      emitter.emit(
        'delete-node-click',
        this.nodeList,
        this.childrenList,
        this.belongConditionNodeData,
        this.data
      )
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

    .sfcNormalNodeContentWrap {
      position: relative;
    }
  }
}
</style>
