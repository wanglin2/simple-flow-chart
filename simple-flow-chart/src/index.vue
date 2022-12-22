<template>
  <div class="sfcContainer">
    <div class="sfcContent">
      <Node
        v-for="node in data"
        :key="node.id"
        :nodeList="data"
        :data="node"
      ></Node>
    </div>
  </div>
</template>

<script>
import emitter from './emit'
import { generateNode } from './utils'

export default {
  name: 'SimpleFlowChart',
  model: {
    prop: 'data',
    event: 'change'
  },
  props: {
    data: {
      type: Array,
      default() {
        return []
      }
    }
  },
  created() {
    emitter.on('add-node-type-click', this.onAddNodeTypeClick)
    emitter.on('add-condition-branch-click', this.onAddConditionBranchClick)
  },
  beforeDestroy() {
    emitter.off('add-node-type-click', this.onAddNodeTypeClick)
    emitter.off('add-condition-branch-click', this.onAddConditionBranchClick)
  },
  methods: {
    onAddNodeTypeClick(nodeList, nodeData, type) {
      let newNode = generateNode(type.type)
      this.addNode(nodeList, nodeData, newNode)
    },

    addNode(nodeList, nodeData, newNode) {
      if (nodeList) {
        let index = nodeList.findIndex(item => {
          return item === nodeData
        })
        nodeList.splice(index + 1, 0, newNode)
      } else {
        nodeData.nodeList.unshift(newNode)
      }
    },

    onAddConditionBranchClick(nodeData) {
      let newNode = generateNode('normal', '条件', '条件内容')
      nodeData.children.push(newNode)
    }
  }
}
</script>

<style lang="less" scoped>
.sfcContainer {
  width: 100%;
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.03);

  /deep/ * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .sfcContent {
    display: flex;
    align-items: center;
    padding: 20px;
    min-width: 100%;
    min-height: 100%;
    width: max-content;
    height: max-content;
  }
}
</style>
