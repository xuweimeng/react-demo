import React from 'react';
import './index.less'
import SearchForm from './search-form/index'
import { Table, Divider, Tag, Button } from 'antd';
import {connect} from 'react-redux'
// import {switchMenu} from './../../redux/action'

class PatientList extends React.Component{
  handleClick = () => {
    const {dispatch} = this.props
    const pp = {
      title: '这是redux传的初始值'
    }
    // dispatch(switchMenu(pp.title))
  }
  render() {
    return (
      <div className="patient-list">
        <div className="search-form">
          <SearchForm />
        </div>
        <Table bordered columns={columns} dataSource={data} style={{ width: '100%'}} />
        <Button type="primary" onClick={this.handleClick}>redux按钮</Button>
      </div>
    )
  }
}
const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    align: 'center'
  },
  {
    title: '联系电话',
    dataIndex: 'mobile',
    key: 'mobile',
    align: 'center'
  },
  {
    title: '性别/年龄',
    dataIndex: 'age',
    key: 'age',
    align: 'center',
    render: (text, record, index) => (
      <div>
        {text}
        <span>/</span>
        {record.sex}
      </div>
    )
  },
  {
    title: '创建时间',
    key: 'sourcetime',
    dataIndex: 'sourcetime',
    align: 'center'
  },
  {
    title: '疾病名称/病种',
    key: 'icdName',
    dataIndex: 'icdName',
    align: 'center'
  },
  {
    title: '标签',
    key: 'tags',
    dataIndex: 'tags',
    align: 'center',
    render: (text) => (
      <span>
        {text.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}
      </span>
    )
  },
  {
    title: 'Action',
    key: 'action',
    align: 'center',
    render: (text, record) => (
      <div>
       <Button>档案</Button>
        <Divider type="vertical" />
        <Button>修改手机号</Button>
      </div>
    )
}];
const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  sex: '男',
  address: 'New York No. 1 Lake Park',
  tags: ['nice', 'developer'],
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
  tags: ['loser'],
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher'],
}];
export default connect()(PatientList);