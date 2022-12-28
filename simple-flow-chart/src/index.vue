<template>
  <div class="sfcContainer">
    <div class="sfcContent">
      <SFCNode
        v-for="node in data"
        :key="node.id"
        :nodeList="data"
        :data="node"
      ></SFCNode>
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
    emitter.on('delete-node-click', this.onNodeDeleteClick)
    emitter.on('add-condition-branch-click', this.onAddConditionBranchClick)
    emitter.on('node-content-click', this.onNodeContentClick)
  },
  beforeDestroy() {
    emitter.off('add-node-type-click', this.onAddNodeTypeClick)
    emitter.off('delete-node-click', this.onNodeDeleteClick)
    emitter.off('add-condition-branch-click', this.onAddConditionBranchClick)
    emitter.off('node-content-click', this.onNodeContentClick)
  },
  methods: {
    onAddNodeTypeClick(nodeList, nodeData, type) {
      let newNode = generateNode(type.type)
      this.addNode(nodeList, nodeData, newNode)
    },

    addNode(nodeList, nodeData, newNode) {
      if (nodeList) {
        let index = this.findNodeIndex(nodeList, nodeData)
        nodeList.splice(index + 1, 0, newNode)
      } else {
        nodeData.nodeList.unshift(newNode)
      }
    },

    onNodeDeleteClick(
      nodeList,
      childrenList,
      belongConditionNodeData,
      nodeData
    ) {
      if (nodeList) {
        let index = this.findNodeIndex(nodeList, nodeData)
        nodeList.splice(index, 1)
      } else if (childrenList) {
        let index = this.findNodeIndex(childrenList, nodeData)
        childrenList.splice(index, 1)
        if (childrenList.length <= 1) {
          this.removeNodeFromData(belongConditionNodeData)
        }
      }
    },

    onAddConditionBranchClick(nodeData) {
      let newNode = generateNode('normal', '条件', '条件内容')
      nodeData.children.push(newNode)
    },

    onNodeContentClick(...args) {
      this.$emit('node-content-click', ...args)
    },

    findNodeIndex(list, node) {
      return list.findIndex(item => {
        return item === node
      })
    },

    removeNodeFromData(nodeData) {
      let walk = arr => {
        for (let i = 0; i < arr.length; i++) {
          let node = arr[i]
          if (node === nodeData) {
            arr.splice(i, 1)
            return true
          }
          let res = false
          if (node.children && node.children.length > 0) {
            res = walk(node.children)
          }
          if (!res && node.nodeList && node.nodeList.length > 0) {
            res = walk(node.nodeList)
          }
          if (res) {
            break
          }
        }
      }
      walk(this.data)
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
