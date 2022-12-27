<template>
  <div class="flowChartContainer">
    <SimpleFlowChart
      v-model="data"
      @node-content-click="onNodeContentClick"
    ></SimpleFlowChart>
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
          <el-input
            type="textarea"
            :rows="3"
            v-model="editNodeData.content"
          >
          </el-input>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import example from '../exmaples/default'
import { Drawer, Dialog, Icon, Input } from 'element-ui'

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
      isEditingTitle: false
    }
  },
  methods: {
    onNodeContentClick(node) {
      console.log(node)
      this.editNodeData = node
      this.showNodeEdit = true
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
