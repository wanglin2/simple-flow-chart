export default [
  { id: 'startEvent', type: 'start', title: '开始' },
  {
    id: '随机id1',
    type: 'normal',
    title: '申请人',
    content: '员工',
    configData: {},
    nodeList: []
  },
  {
    id: '随机id2',
    type: 'normal',
    title: '审批人',
    content: '主管',
    configData: {},
    nodeList: []
  },
  {
    id: '随机id3',
    type: 'condition',
    title: '条件分支',
    children: [
      {
        id: '随机id3-1',
        title: '通过',
        content: '理由充分',
        type: 'normal',
        configData: {},
        nodeList: [
          {
            id: '随机id3-1-1',
            type: 'normal',
            title: '审批人',
            content: '上级主管',
            configData: {},
            nodeList: [
              {
                id: '随机id3-1-1-1',
                type: 'condition',
                title: '条件分支',
                children: [
                  {
                    id: '随机id3-1-1-1-1',
                    title: '通过',
                    content: '理由充分',
                    type: 'normal',
                    configData: {},
                    nodeList: []
                  },
                  {
                    id: '随机id3-1-1-1-2',
                    type: 'normal',
                    title: '驳回',
                    content: '理由不充分',
                    configData: {},
                    nodeList: []
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: '随机id3-2',
        type: 'normal',
        title: '驳回',
        content: '理由不充分',
        configData: {},
        nodeList: []
      }
    ]
  },
  { id: 'endEvent', type: 'end', title: '结束' }
]
