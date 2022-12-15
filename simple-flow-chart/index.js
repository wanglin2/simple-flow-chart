import src from './src/index.vue';
import ConditionNode from './src/components/ConditionNode.vue';
import EndNode from './src/components/EndNode.vue';
import Node from './src/components/Node.vue';
import NormalNode from './src/components/NormalNode.vue';
import StartNode from './src/components/StartNode.vue';

const install = function(Vue) {
  Vue.component(ConditionNode.name, ConditionNode);
  Vue.component(EndNode.name, EndNode);
  Vue.component(Node.name, Node);
  Vue.component(NormalNode.name, NormalNode);
  Vue.component(StartNode.name, StartNode);
  Vue.component(src.name, src);
};

export default {
  install
};