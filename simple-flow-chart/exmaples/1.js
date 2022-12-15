export default [
  { id: 'startEvent', type: 'start', title: '开始' },
  {
    id: 'sid-a54e890f-5b3c-4fa5-b916-3ff0c7873fa4',
    title: '申请人',
    type: 'normal_-1'
  },
  {
    id: 'sid-3181f87a-3fc8-4398-a788-a696010409e6',
    title: '审批人',
    type: 'normal_0'
  },
  {
    id: 'sid-59f180fb-9a68-4ae7-ae65-84fe74f54a99',
    endId: 'sid-ba3f6391-c35f-49da-8669-98661dc8eac5',
    groupType: '1',
    groupName: '分支节点',
    type: 'condition',
    title: '条件分支',
    children: [
      {
        id: 'sid-25fbea84-31ed-47b2-af2f-7a1e24d01693',
        type: 'condition_1',
        title: '条件1',
        nodeList: [
          {
            id: 'sid-714ed3e5-1f77-4e89-a205-35a3b51dcbd8',
            title: '审批人',
            type: 'normal_0',
            assigneeNames: ''
          },
          {
            id: 'sid-ad2d7cd9-7bc5-4c97-abc9-80ddd8831c53',
            endId: 'sid-675506ba-b743-4653-856b-199b71663fa1',
            groupType: '1',
            groupName: '分支节点',
            type: 'condition',
            title: '条件分支',
            children: [
              {
                id: 'sid-416f66fd-06ba-43ca-b7a0-72f48a60488b',
                type: 'condition_1',
                title: '条件1',
                nodeList: []
              },
              {
                id: 'sid-5e0d284e-2676-44a1-b8c5-0f2e9444510f',
                type: 'condition_-1',
                title: '默认条件',
                nodeList: [
                  {
                    id: 'sid-a733eb2b-ed2c-46dd-9df2-7694db976e00',
                    title: '发送短信',
                    type: 'information_0',
                    assigneeNames: ''
                  },
                  {
                    id: 'sid-e5787fc3-e3c8-482a-94ff-63f11042bdc0',
                    endId: 'sid-17a61914-06e8-441e-a4ef-80d2f6a9bb84',
                    groupType: '1',
                    groupName: '分支节点',
                    type: 'condition',
                    title: '条件分支',
                    children: [
                      {
                        id: 'sid-5a276c17-6456-463e-a6fd-4dd48a0cdcb1',
                        type: 'condition_1',
                        title: '条件1',
                        nodeList: []
                      },
                      {
                        id: 'sid-0ff4464c-ed30-48f1-8647-80df14d311c1',
                        type: 'condition_-1',
                        title: '默认条件',
                        nodeList: []
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'sid-df4bbdf2-db8d-40a3-8839-9272b5660e9c',
        type: 'condition_-1',
        title: '默认条件',
        nodeList: []
      }
    ]
  },
  { id: 'endEvent', type: 'end', title: '结束' }
]
