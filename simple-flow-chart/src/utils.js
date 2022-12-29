import { v4 as uuidv4 } from 'uuid'
import { store } from './constant';

export const generateNode = (
  type,
  title = '普通节点',
  content = '节点内容'
) => {
  const createUid = store.customCreateNodeId || uuidv4
  switch (type) {
    case 'normal':
      return {
        id: createUid(),
        type: 'normal',
        title,
        content,
        configData: {},
        nodeList: []
      }
    case 'condition':
      return {
        id: createUid(),
        type: 'condition',
        title: '条件分支',
        children: [
          {
            id: createUid(),
            title: '条件1',
            content: '条件1的内容',
            type: 'normal',
            configData: {},
            nodeList: []
          },
          {
            id: createUid(),
            type: 'normal',
            title: '条件2',
            content: '条件2的内容',
            configData: {},
            nodeList: []
          }
        ]
      }
    default:
      break
  }
}
