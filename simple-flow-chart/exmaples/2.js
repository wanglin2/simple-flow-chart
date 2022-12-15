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
        }
      ],
      rollbackStrategy: { strategyType: 1, rollbackNode: [] },
      skipStrategy: { strategyType: 0, skipExpression: '' },
      expirationStrategy: { strategyType: 0, ttl: 0 },
      assignees: [],
      assigneeType: 'starter'
    }
  },
  {
    id: 'sid-3181f87a-3fc8-4398-a788-a696010409e6',
    title: '审批人',
    type: 'normal_0',
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
    id: 'sid-59f180fb-9a68-4ae7-ae65-84fe74f54a99',
    endId: 'sid-26131816-9875-4c47-8d65-4cd4b9554d6b',
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
                }
              ],
              rollbackStrategy: { strategyType: 1, rollbackNode: [] },
              skipStrategy: { strategyType: 0, skipExpression: '' },
              expirationStrategy: { strategyType: 0, ttl: 0 },
              assignees: [],
              assigneeType: 'starter'
            }
          },
          {
            id: 'sid-ad2d7cd9-7bc5-4c97-abc9-80ddd8831c53',
            endId: 'sid-bc636a3d-6ed6-4b31-ad3d-deee8959aedd',
            groupType: '1',
            groupName: '分支节点',
            type: 'condition',
            title: '条件分支',
            children: [
              {
                id: 'sid-416f66fd-06ba-43ca-b7a0-72f48a60488b',
                type: 'condition_1',
                title: '条件1',
                nodeList: [],
                configData: { expression: 'dfh' }
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
                    configData: {
                      to: '${user:leader(1)}',
                      text: '',
                      assignees: [],
                      assigneeType: 'leader'
                    }
                  },
                  {
                    id: 'sid-e5787fc3-e3c8-482a-94ff-63f11042bdc0',
                    endId: 'sid-f5af75ff-b46d-49d2-8494-8f1a79dd5947',
                    groupType: '1',
                    groupName: '分支节点',
                    type: 'condition',
                    title: '条件分支',
                    children: [
                      {
                        id: 'sid-5a276c17-6456-463e-a6fd-4dd48a0cdcb1',
                        type: 'condition_1',
                        title: '条件1',
                        nodeList: [],
                        configData: { expression: '1' }
                      },
                      {
                        id: 'sid-0ff4464c-ed30-48f1-8647-80df14d311c1',
                        type: 'condition_-1',
                        title: '默认条件',
                        nodeList: [],
                        configData: { expression: '2' }
                      }
                    ]
                  }
                ],
                configData: { expression: 'ethge' }
              }
            ]
          }
        ],
        configData: { expression: 'gvhj' }
      },
      {
        id: 'sid-df4bbdf2-db8d-40a3-8839-9272b5660e9c',
        type: 'condition_-1',
        title: '默认条件',
        nodeList: [
          {
            id: 'sid-11049d75-4b40-49b7-97bf-a97fba399e13',
            title: '抄送人',
            type: 'information_2',
            assigneeNames: '',
            configData: {
              cc: '${PROCESS_STARTER}',
              assignees: [],
              assigneeType: 'starter'
            }
          },
          {
            id: 'sid-bd2379dc-5bc6-4601-aacd-95f3e9b039f4',
            endId: 'sid-f611e1a4-e400-4e04-a38e-05914c5b6326',
            groupType: '1',
            groupName: '分支节点',
            type: 'condition',
            title: '条件分支',
            children: [
              {
                id: 'sid-95466427-e34c-4eef-85a2-0b0cd59af313',
                type: 'condition_1',
                title: '条件1',
                nodeList: [],
                configData: { expression: 'sdf' }
              },
              {
                id: 'sid-05cbbe9c-a408-4869-903e-d9647db39f80',
                type: 'condition_-1',
                title: '默认条件',
                nodeList: [],
                configData: { expression: 'sdfsf' }
              }
            ]
          }
        ],
        configData: { expression: 'egtrhn' }
      }
    ]
  },
  {
    id: 'sid-a5048043-585a-4ef4-80ab-5801098b3ca5',
    endId: 'sid-1db8f068-a2ca-411b-9ce3-1d4f16a3b98a',
    groupType: '1',
    groupName: '分支节点',
    type: 'condition',
    title: '条件分支',
    children: [
      {
        id: 'sid-19f9ad33-a57a-4afc-b823-4a7dc9a81aff',
        type: 'condition_1',
        title: '条件1',
        nodeList: [],
        configData: { expression: 'sdfswdfs' }
      },
      {
        id: 'sid-fe9ec66a-475c-4681-a479-048f98a6762f',
        type: 'condition_-1',
        title: '默认条件',
        nodeList: [],
        configData: { expression: 'sdfsdfsd' }
      }
    ]
  },
  { id: 'endEvent', type: 'end', title: '结束' }
]
