export default [
  { id: 'startEvent', type: 'start', title: '开始' },
  {
    id: 'sid-a54e890f-5b3c-4fa5-b916-3ff0c7873fa4',
    title: '申请人',
    type: 'normal_-1',
    assigneeNames: '',
    configData: {
      buttons: [
        {
          showName: '提交',
          name: '提交',
          id: 'agree',
          enabled: true,
          uri: 'workflow-web/service/rs/v1/taskManage/completeTask'
        }
      ],
      formPermissions: [
        {
          fieldId: 'Input_isbhfxmwul1',
          fieldName: '单行文本',
          valueType: 'string',
          fieldSettings: {
            id: 'Input_isbhfxmwul1',
            type: 'Input',
            label: '单行文本'
          },
          filedMethod: 'editable'
        },
        {
          fieldId: 'InputNumber_cagftqhipq6',
          fieldName: '计数器',
          valueType: 'number',
          fieldSettings: {
            id: 'InputNumber_cagftqhipq6',
            type: 'InputNumber',
            label: '数值'
          },
          filedMethod: 'hidden'
        },
        {
          fieldId: 'Switch_0qfwyvf3t9x',
          fieldName: '开关',
          valueType: 'number',
          fieldSettings: {
            id: 'Switch_0qfwyvf3t9x',
            type: 'Switch',
            label: '开关'
          },
          filedMethod: 'hidden'
        },
        {
          fieldId: 'SelectMultiple_zw4hdgcvob5',
          fieldName: '下拉多选',
          valueType: 'array',
          fieldSettings: {
            id: 'SelectMultiple_zw4hdgcvob5',
            type: 'SelectMultiple',
            label: '下拉复选'
          },
          filedMethod: 'hidden'
        }
      ],
      rollbackStrategy: { strategyType: 1, rollbackNode: [] },
      skipStrategy: { strategyType: 0, skipExpression: '' },
      expirationStrategy: { strategyType: 0, ttl: 0 },
      assignees: [],
      assigneeType: 'leader'
    }
  },
  {
    id: 'sid-75053d7c-9b41-4d49-b5d6-018986d6e4c5',
    title: '审批人',
    type: 'normal_0',
    assigneeNames: 'admin',
    configData: {
      buttons: [
        {
          id: 'agree',
          name: '同意',
          enabled: true,
          btnType: '2',
          sort: 1,
          uri: 'workflow-web/service/rs/v1/taskManage/completeTask'
        },
        {
          id: 'disagree',
          name: '不同意',
          enabled: false,
          btnType: '2',
          sort: 2,
          uri: 'workflow-web/service/rs/v1/taskManage/completeTask'
        },
        {
          id: 'reject',
          name: '驳回',
          enabled: true,
          btnType: '2',
          sort: 3,
          uri: 'workflow-web/service/rs/v1/taskManage/rejectTask'
        },
        {
          id: 'delegate',
          name: '委派',
          enabled: false,
          btnType: '2',
          sort: 4,
          uri: 'workflow-web/service/rs/v1/taskManage/delegateTask'
        },
        {
          id: 'transfer',
          name: '转办',
          enabled: false,
          btnType: '2',
          sort: 5,
          uri: 'workflow-web/service/rs/v1/taskManage/transferTask'
        },
        {
          id: 'claim',
          name: '签收',
          enabled: false,
          btnType: '2',
          sort: 6,
          uri: 'workflow-web/service/rs/v1/taskManage/claimTask'
        },
        {
          id: 'unclaim',
          name: '反签收',
          enabled: false,
          btnType: '2',
          sort: 7,
          uri: 'workflow-web/service/rs/v1/taskManage/unclaimTask'
        }
      ],
      formPermissions: [
        {
          fieldId: 'Input_isbhfxmwul1',
          fieldName: '单行文本',
          valueType: 'string',
          fieldSettings: {
            id: 'Input_isbhfxmwul1',
            type: 'Input',
            label: '单行文本'
          },
          filedMethod: 'editable'
        },
        {
          fieldId: 'InputNumber_cagftqhipq6',
          fieldName: '计数器',
          valueType: 'number',
          fieldSettings: {
            id: 'InputNumber_cagftqhipq6',
            type: 'InputNumber',
            label: '数值'
          },
          filedMethod: 'hidden'
        },
        {
          fieldId: 'Switch_0qfwyvf3t9x',
          fieldName: '开关',
          valueType: 'number',
          fieldSettings: {
            id: 'Switch_0qfwyvf3t9x',
            type: 'Switch',
            label: '开关'
          },
          filedMethod: 'hidden'
        },
        {
          fieldId: 'SelectMultiple_zw4hdgcvob5',
          fieldName: '下拉多选',
          valueType: 'array',
          fieldSettings: {
            id: 'SelectMultiple_zw4hdgcvob5',
            type: 'SelectMultiple',
            label: '下拉复选'
          },
          filedMethod: 'hidden'
        }
      ],
      rollbackStrategy: { strategyType: 1, rollbackNode: [] },
      skipStrategy: { strategyType: 0, skipExpression: '' },
      expirationStrategy: { strategyType: 0, ttl: 0 },
      assigneeNames: ['admin'],
      assignees: ['admin'],
      assigneeType: 'users'
    }
  },
  {
    id: 'sid-9b501eb9-7a84-4a3e-9b32-5b91d415528a',
    endId: 'sid-6931aa84-34d5-45cf-8496-8ffc96c583b2',
    groupType: '1',
    groupName: '分支节点',
    type: 'condition',
    title: '条件分支',
    children: [
      {
        id: 'sid-bd3484a8-bba8-409c-a5bc-91eba6840ceb',
        type: 'condition_1',
        title: '通过',
        nodeList: [
          {
            id: 'sid-98ee8888-c6bf-47cb-9c6e-1fa6a5901adb',
            endId: 'sid-c58bd931-223f-4be6-b2e2-bc29e1b9469b',
            groupType: '1',
            groupName: '分支节点',
            type: 'condition',
            title: '条件分支',
            children: [
              {
                id: 'sid-849909eb-f36e-412d-8e9a-d8aed4163737',
                type: 'condition_1',
                title: '条件1',
                nodeList: [
                  {
                    id: 'sid-9ba9ecf4-df72-4906-a12e-d042bcef699a',
                    title: '审批人',
                    type: 'normal_0',
                    assigneeNames: '用户组',
                    configData: {
                      buttons: [
                        {
                          id: 'agree',
                          name: '同意',
                          enabled: true,
                          btnType: '2',
                          sort: 1,
                          uri: 'workflow-web/service/rs/v1/taskManage/completeTask'
                        },
                        {
                          id: 'disagree',
                          name: '不同意',
                          enabled: false,
                          btnType: '2',
                          sort: 2,
                          uri: 'workflow-web/service/rs/v1/taskManage/completeTask'
                        },
                        {
                          id: 'reject',
                          name: '驳回',
                          enabled: true,
                          btnType: '2',
                          sort: 3,
                          uri: 'workflow-web/service/rs/v1/taskManage/rejectTask'
                        },
                        {
                          id: 'delegate',
                          name: '委派',
                          enabled: false,
                          btnType: '2',
                          sort: 4,
                          uri: 'workflow-web/service/rs/v1/taskManage/delegateTask'
                        },
                        {
                          id: 'transfer',
                          name: '转办',
                          enabled: false,
                          btnType: '2',
                          sort: 5,
                          uri: 'workflow-web/service/rs/v1/taskManage/transferTask'
                        },
                        {
                          id: 'claim',
                          name: '签收',
                          enabled: false,
                          btnType: '2',
                          sort: 6,
                          uri: 'workflow-web/service/rs/v1/taskManage/claimTask'
                        },
                        {
                          id: 'unclaim',
                          name: '反签收',
                          enabled: false,
                          btnType: '2',
                          sort: 7,
                          uri: 'workflow-web/service/rs/v1/taskManage/unclaimTask'
                        }
                      ],
                      formPermissions: [
                        {
                          fieldId: 'Input_isbhfxmwul1',
                          fieldName: '单行文本',
                          valueType: 'string',
                          fieldSettings: {
                            id: 'Input_isbhfxmwul1',
                            type: 'Input',
                            label: '单行文本'
                          },
                          filedMethod: 'editable'
                        },
                        {
                          fieldId: 'InputNumber_cagftqhipq6',
                          fieldName: '计数器',
                          valueType: 'number',
                          fieldSettings: {
                            id: 'InputNumber_cagftqhipq6',
                            type: 'InputNumber',
                            label: '数值'
                          },
                          filedMethod: 'hidden'
                        },
                        {
                          fieldId: 'Switch_0qfwyvf3t9x',
                          fieldName: '开关',
                          valueType: 'number',
                          fieldSettings: {
                            id: 'Switch_0qfwyvf3t9x',
                            type: 'Switch',
                            label: '开关'
                          },
                          filedMethod: 'hidden'
                        },
                        {
                          fieldId: 'SelectMultiple_zw4hdgcvob5',
                          fieldName: '下拉多选',
                          valueType: 'array',
                          fieldSettings: {
                            id: 'SelectMultiple_zw4hdgcvob5',
                            type: 'SelectMultiple',
                            label: '下拉复选'
                          },
                          filedMethod: 'hidden'
                        }
                      ],
                      rollbackStrategy: {
                        strategyType: 1,
                        rollbackNode: []
                      },
                      skipStrategy: { strategyType: 0, skipExpression: '' },
                      expirationStrategy: { strategyType: 0, ttl: 0 },
                      assigneeNames: ['用户组'],
                      assignees: ['d1'],
                      assigneeType: 'groups'
                    }
                  }
                ],
                configData: { expression: 'sdgs' }
              },
              {
                id: 'sid-5b75e70d-0d43-4ae7-97bc-6cfb2e7915a1',
                type: 'condition_-1',
                title: '默认条件',
                nodeList: [],
                configData: { expression: 'sdgfs' }
              }
            ]
          }
        ],
        configData: { expression: 'sdgdsg' }
      },
      {
        id: 'sid-f41050af-f01b-49df-ae94-7d2a259f4250',
        type: 'condition_-1',
        title: '驳回',
        nodeList: [],
        configData: { expression: 'sdfsdfs' }
      }
    ]
  },
  { id: 'endEvent', type: 'end', title: '结束' }
]
