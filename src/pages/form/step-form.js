import React from 'react';
import { Table, Button } from 'antd'

const columns = [
  {title: '姓名', width: 100, dataIndex: 'name', key: '1'},
  {title: '羁攀1', width: 100, dataIndex: 'name1', key: '2'},
  {title: '羁攀2', width: 100, dataIndex: 'name2', key: '3'},
  {title: '羁攀3', width: 100, dataIndex: 'name3', key: '4'},
  {title: '战马', width: 100, dataIndex: 'name4', key: '5'},
  {title: '书', width: 100, dataIndex: 'name5', key: '6'},
  {title: '姓名', width: 100, dataIndex: 'name', key: '7'},
  {title: '姓名', width: 100, dataIndex: 'name', key: '8'},
  {
    title: '操作',
    key: 'operation',
    width: 100,
    render: () => (
      <div>
        <Button type="primary">删除</Button>
        <Button type="primary">修改</Button>
      </div>
    )
  }
]

class Forms extends React.Component{
  render() {
    return (
      <div>
        <Table columns={columns} dataSource={data} />
        <h1>战书：太平要术</h1>
        <h1>武将: 貂蝉、陈宫、张合、文丑、关羽、司马懿、袁绍、张角、典韦、曹仁、甄姬、姜维、</h1>
      </div>
    )
  }
}
const data = [{
  key: '1',
  name: '吕布',
  name1: '貂蝉',
  name2: '陈宫',
  name3: '贾诩、袁绍、张角、董卓',
  name4: '赤兔',
  name5: '太平要术'
}, {
  key: '2',
  name: '董卓',
  name1: '张合',
  name2: '袁绍',
  name3: '乱世天下',
  name4: '惊帆',
  name5: '太平清领道'
}, {
  key: '3',
  name: '华雄',
  name1: '文丑',
  name2: '董卓',
  name3: '典韦、曹仁',
  name4: '论语',
  name5: '乌孙'
},{
  key: '4',
  name: '华佗',
  name1: '关羽',
  name2: '贾诩',
  name3: '甄姬、姜维',
  name4: '的卢',
  name5: '青囊书'
},{
  key: '5',
  name: '贾诩',
  name1: '司马懿',
  name2: '华佗',
  name3: '乱世天下',
  name4: '马云踏雪',
  name5: '孙子兵法'
},{
  key: '6',
  name: '张角',
  name1: '左慈',
  name2: '于吉',
  name3: '乱世天下',
  name4: '惊帆',
  name5: '太平要术'
}];

export default Forms;