export const store = {}

export const defaultNodeList = [
  { id: 'startEvent', type: 'start', title: '开始' },
  { id: 'endEvent', type: 'end', title: '结束' }
]

export const defaultNodeTypeList = [
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
