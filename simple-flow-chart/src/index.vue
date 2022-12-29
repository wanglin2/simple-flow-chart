<template>
  <div class="sfcContainer" :style="{ background: background }">
    <div class="sfcContent" :class="{ vertical: vertical }">
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
import { store, defaultNodeList } from './constant'

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
    },
    customCreateNode: {
      type: Function
    },
    customCreateConditionBranchNode: {
      type: Function
    },
    beforeDeleteNode: {
      type: Function
    },
    background: {
      type: String,
      default: 'rgba(0, 0, 0, 0.03)'
    },
    readonly: {
      type: Boolean,
      default: false
    },
    nodeTypeList: {
      type: Array
    },
    vertical: {
      type: Boolean,
      default: false
    }
  },
  created() {
    store.readonly = this.readonly
    store.nodeTypeList = this.nodeTypeList
    store.vertical = this.vertical
    if (this.data.length <= 0) {
      this.data.push(...defaultNodeList)
    }
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
      let newNode = null
      if (this.customCreateNode) {
        newNode = this.customCreateNode(nodeList, nodeData, type)
      }
      if (!newNode) {
        newNode = generateNode(type.type)
      }
      this.addNode(nodeList, nodeData, newNode)
      this.$emit('add-node', newNode)
    },

    addNode(nodeList, nodeData, newNode) {
      if (nodeList) {
        let index = this.findNodeIndex(nodeList, nodeData)
        nodeList.splice(index + 1, 0, newNode)
      } else {
        nodeData.nodeList.unshift(newNode)
      }
    },

    onNodeDeleteClick(...args) {
      if (this.beforeDeleteNode) {
        this.beforeDeleteNode(...args).then(() => {
          this.deleteNode(...args)
        })
      } else {
        this.deleteNode(...args)
        this.$emit('delete-node', args[3])
      }
    },

    deleteNode(nodeList, childrenList, belongConditionNodeData, nodeData) {
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
      let newNode = null
      if (this.customCreateConditionBranchNode) {
        newNode = this.customCreateConditionBranchNode(nodeData)
      }
      if (!newNode) {
        newNode = generateNode('normal', '条件', '条件内容')
      }
      nodeData.children.push(newNode)
      this.$emit('add-condition-branch', newNode)
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

    &.vertical {
      flex-direction: column;
      justify-content: center;
    }
  }
}
</style>
