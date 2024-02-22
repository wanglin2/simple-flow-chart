<template>
  <div class="flowChartContainer">
    <SimpleFlowChart
      ref="SimpleFlowChart"
      v-model="data"
      :initFit="true"
      :enableDrag="true"
      :showScrollBar="true"
      :readonly="false"
      :beforeDeleteNode="beforeDeleteNode"
      :nodeTypeList="nodeTypeList"
      :vertical="false"
      @node-content-click="onNodeContentClick"
    >
    </SimpleFlowChart>
    <el-drawer :visible.sync="showNodeEdit" :with-header="false">
      <div class="nodeEditBox" v-if="showNodeEdit">
        <div class="nodeEditTitle">
          <div class="editTitle" v-if="isEditingTitle">
            <el-input
              v-model="editNodeData.title"
              @keyup.native.enter="isEditingTitle = false"
              @blur="isEditingTitle = false"
            ></el-input>
          </div>
          <div class="showTitle" v-else>
            <div class="title">{{ editNodeData.title }}</div>
            <div class="icon el-icon-edit" @click="isEditingTitle = true"></div>
          </div>
        </div>
        <div class="nodeEditContent">
          <el-input type="textarea" :rows="3" v-model="editNodeData.content">
          </el-input>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import example from '../exmaples/default'
import { Drawer, Dialog, Icon, Input, MessageBox } from 'element-ui'

export default {
  components: {
    [Drawer.name]: Drawer,
    [Dialog.name]: Dialog,
    [Icon.name]: Icon,
    [Input.name]: Input
  },
  data() {
    return {
      data: example,
      showNodeEdit: false,
      editNodeData: null,
      isEditingTitle: false,
      nodeTypeList: [
        {
          name: '普通节点',
          list: [
            {
              type: 'normal',
              name: '普通节点'
            }
          ]
        },
        {
          name: '分支节点',
          list: [
            {
              type: 'condition',
              name: '条件分支'
            }
          ]
        }
      ]
    }
  },
  mounted() {
    window.addEventListener('resize', this.onResize)
  },
  methods: {
    beforeDeleteNode(...args) {
      console.log(args)
      return MessageBox.confirm('确定删除该节点？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
    },

    onNodeContentClick(node) {
      console.log(node)
      this.editNodeData = node
      this.showNodeEdit = true
    },

    onResize() {
      this.$refs.SimpleFlowChart.fit()
    }
  }
}
</script>

<style lang="less" scoped>
.flowChartContainer {
  width: 100%;
  height: 100%;
}

.nodeEditBox {
  padding: 20px;

  .nodeEditTitle {
    margin-bottom: 20px;

    .showTitle {
      display: flex;
      align-items: center;

      .title {
        color: rgba(0, 0, 0, 0.85);
        font-size: 20px;
        font-weight: bold;
        margin-right: 5px;
      }

      .icon {
        cursor: pointer;
      }
    }
  }

  .nodeEditContent {
  }
}
</style>
