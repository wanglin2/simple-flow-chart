export default [
  { id: 'startEvent', type: 'start', title: '开始' },
  {
    id: 'sid-a54e890f-5b3c-4fa5-b916-3ff0c7873fa4',
    title: '申请人',
    type: 'normal_-1',
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
  { id: 'endEvent', type: 'end', title: '结束' }
]
