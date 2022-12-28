<template>
  <div class="sfcDeleteNode" @click.stop="$emit('click')">
    <svg
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <path d="M106.666667 213.333333h810.666666v42.666667H106.666667z"></path>
      <path
        d="M640 128v42.666667h42.666667V128c0-23.573333-19.093333-42.666667-42.538667-42.666667H383.872A42.496 42.496 0 0 0 341.333333 128v42.666667h42.666667V128h256z"
      ></path>
      <path
        d="M213.333333 896V256H170.666667v639.957333C170.666667 919.552 189.653333 938.666667 213.376 938.666667h597.248C834.218667 938.666667 853.333333 919.68 853.333333 895.957333V256h-42.666666v640H213.333333z"
      ></path>
      <path
        d="M320 341.333333h42.666667v384h-42.666667zM490.666667 341.333333h42.666666v384h-42.666666zM661.333333 341.333333h42.666667v384h-42.666667z"
      ></path>
    </svg>
  </div>
</template>

<script>
/**
 * @Author: 王林
 * @Date: 2022-12-28 11:09:24
 * @Desc: 删除节点
 */
export default {
  name: 'SFCDeleteNode'
}
</script>

<style lang="less" scoped>
.sfcDeleteNode {
  position: absolute;
  top: -28px;
  right: 0;
  background: #0089ff;
  width: 24px;
  height: 24px;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  animation: show 1s;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 4px;
    left: 0;
    bottom: -4px;
  }

  svg {
    fill: #fff;
    width: 16px;
    height: 16px;
  }
}

@keyframes show {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
