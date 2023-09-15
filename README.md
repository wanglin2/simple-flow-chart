# 一个基于Vue2的极简流程设计组件

## 安装

```bash
npm i @wanglin1994/simple-flow-chart
```



## 引入

```js
import SimpleFlowChart from '@wanglin1994/simple-flow-chart'


Vue.use(SimpleFlowChart, {
  notRegisterNodeContent: false, // 如果需要自己编写节点内容组件，设为true
  notRegisterNodeTypeContent: false // 如果需要自己编写添加节点的悬浮面板组件，设为true
})
```



## 使用

```html
<div class="flowChartContainer">
    <SimpleFlowChart v-model="data"></SimpleFlowChart>
</div>
```

提供一个宽高固定的容器，双向绑定的数据`data`可以回传完整数据，或者初始传一个空数组即可。



# 详细文档

### 数据

```html
<SimpleFlowChart v-model="data"></SimpleFlowChart>
```

`data`数据结构示例如下：

```js
[
  { id: 'startEvent', type: 'start', title: '开始' },
  {
    id: '随机id',
    type: 'normal',
    title: '申请人',
    content: '员工',
    configData: {},
    nodeList: []
  },
  {
    id: '随机id',
    type: 'condition',
    title: '条件分支',
    children: [
      {
        id: '随机id',
        title: '通过',
        content: '理由充分',
        type: 'normal',
        configData: {},
        nodeList: [
          {
            id: '随机id',
            type: 'normal',
            title: '审批人',
            content: '上级主管',
            configData: {},
            nodeList: []
      },
      {
        id: '随机id',
        type: 'normal',
        title: '指派',
        content: 'HR',
        configData: {},
        nodeList: []
      }
    ]
  },
  { id: 'endEvent', type: 'end', title: '结束' }
]
```

`title`字段为节点标题，会显示在节点上，`content`为节点内容，也会显示在节点上，如果有不需要显示的自定义数据都可以保存在`configData`里。

`id`默认会使用`uuid`随机生成，也可以自定义生成。



## 属性

```html
<SimpleFlowChart v-model="data"></SimpleFlowChart>
```

`SimpleFlowChart`组件还支持以下属性：

### enableDrag

> v0.0.3+

类型：`Boolean`，默认为`true`

是否必传：否

是否开启按住画布拖拽功能。

### customCreateNode

类型：`Function`

是否必传：否

回调参数：`nodeList`（当前被点击添加新节点的节点所在节点列表）, `nodeData`（当前被点击添加新节点的节点）, `type`（悬浮面板里点击要添加的节点类型数据）

自定义创建新节点，当点击添加节点的时候会调用该函数，需要返回一个要添加的新节点的数据结构。



### customCreateConditionBranchNode

类型：`Function`

是否必传：否 

回调参数：`nodeData`

自定义创建新的分支节点。需要返回一个要添加的新节点的数据结构。



### beforeDeleteNode

类型：`Function`

是否必传：否

回调参数：`nodeList`, `childrenList`, `belongConditionNodeData`, `nodeData`

删除节点前的回调函数，需要返回一个`Promise`，如果结果是`resolve` ，那么会执行删除，否则什么也不做。如果需要进行删除前的二次确认那么这个函数是你需要的。



### background

类型：`String`

是否必传：否

默认值：`rgba(0, 0, 0, 0.03)`

画布背景颜色。



### readonly

类型：`Boolean`

是否必传：否

默认值：`false`

是否只读。



### nodeTypeList

类型：`Array`

是否必传：否

默认可以添加的节点列表数据如下：

```js
[
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
```

你可以通过该属性自定义可添加的节点类型列表。



### vertical

类型：`Boolean`

是否必传：否

是否垂直显示。



### showScaleBar

类型：`Boolean`

是否必传：否

是否显示右上角的放大缩小控件。



### customCreateNodeId

类型：`Function`

是否必传：否

自定义创建节点的唯一的`id`。



## 事件

`SimpleFlowChart`组件上可以监听如下事件：



### add-node

数据：`newNode`

添加完新节点后触发。



### delete-node

数据：`nodeData`

删除一个节点后触发。



### add-condition-branch

数据：`newNode`

添加完新的分支节点后触发。



### node-content-click

数据：`nodeData`、`nodeList`

一个节点被点击时触发，一般用于配置某个节点数据时使用。



## 自定义节点、

如果想自定义节点的样式，首先需要在注册组件时传入如下选项：

```js
Vue.use(SimpleFlowChart, {
  notRegisterNodeContent: true, // 如果需要自己编写节点内容组件，设为true
})
```

然后你就可以自己编写一个节点内容的组件了，组件的名称，也就是`name`必须为`SFCNodeContent`，然后再使用前先全局注册即可。

组件的数据可以通过名为`data`的`props`来接收。



## 自定义节点添加悬浮面板

如果想自定义添加节点类型的悬浮选择面板，首先需要在注册组件时传入如下选项：

```js
Vue.use(SimpleFlowChart, {
  notRegisterNodeContent: true, 
})
```

然后你就可以自己编写一个组件了，组件的名称，也就是`name`必须为`SFCNodeTypeContent`，然后再使用前先全局注册即可。