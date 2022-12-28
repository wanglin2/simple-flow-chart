<template>
  <div class="sfcNodeTypeContent">
    <div
      class="sfcNodeTypeGroup"
      v-for="(group, groupIndex) in nodeTypeList"
      :key="groupIndex"
    >
      <div class="sfcNodeTypeGroupName">{{ group.name }}</div>
      <div class="sfcNodeTypeList">
        <div
          class="sfcNodeTypeItem"
          v-for="(type, typeIndex) in group.list"
          :key="typeIndex"
          @click="onNodeTypeClick(type, group)"
        >
          {{ type.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defaultNodeTypeList, store } from '../constant'

export default {
  name: 'SFCNodeTypeContent',
  data() {
    return {
      nodeTypeList: store.nodeTypeList || defaultNodeTypeList
    }
  },
  methods: {
    onNodeTypeClick(...args) {
      this.$emit('click', ...args)
    }
  }
}
</script>

<style lang="less" scoped>
.sfcNodeTypeContent {
  padding: 12px 8px;
  width: 300px;
  background-color: #000;
  border-radius: 4px;

  .sfcNodeTypeGroup {
    width: 100%;
    margin-bottom: 12px;

    &:last-of-type {
      margin-bottom: 0;
    }

    .sfcNodeTypeGroupName {
      color: #888;
      margin-bottom: 12px;
    }

    .sfcNodeTypeList {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-bottom: -12px;

      .sfcNodeTypeItem {
        display: flex;
        width: 136px;
        padding: 4px 8px;
        border: 1px solid #2e2e2e;
        background: #000;
        color: #fff;
        font-size: 14px;
        cursor: pointer;
        margin-bottom: 12px;

        &:hover {
          border-color: #595959;
          background: #3b3b3b;
        }
      }
    }
  }
}
</style>
