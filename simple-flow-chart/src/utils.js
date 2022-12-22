import { v4 as uuidv4 } from 'uuid'

export const generateNode = (
  type,
  title = '普通节点',
  content = '节点内容'
) => {
  switch (type) {
    case 'normal':
      return {
        id: uuidv4(),
        type: 'normal',
        title,
        content,
        configData: {},
        nodeList: []
      }
    case 'condition':
      return {
        id: uuidv4(),
        type: 'condition',
        title: '条件分支',
        children: [
          {
            id: uuidv4(),
            title: '条件1',
            content: '条件1的内容',
            type: 'normal',
            configData: {},
            nodeList: []
          },
          {
            id: uuidv4(),
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
