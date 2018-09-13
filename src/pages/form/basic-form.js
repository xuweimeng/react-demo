import React from 'react';
import Child1 from './child';
import {
  Card,
  Form,
  Icon,
  Input
} from 'antd';

const FormItem = Form.Item;

class warppedDemo extends React.Component{
  state={
    message: '我是父组件的message;'
  }
  onChildChanged = (value) => {
    console.log(value);

    this.setState({
      message: value
    })
  }
  render() {
    const {getFieldDecorator} = this.props.form;
    const formItemLayout = {
      labelCol: {span: 6},
      wrapperCol: {span: 14}
    }
    return (
      <Card title="基本表单" style={{textAlign: 'left'}}>
        <Form>
          <FormItem
            {...formItemLayout}
            label="plain Text">
            <span className="ant-form-text">China</span>
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="姓名">
            {getFieldDecorator('name', {
              rules: [{required: true, message: '请输入姓名！'}],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="text" placeholder="请输入姓名！" />
            )
            }
          </FormItem>
        </Form>
        <hr/>
        <Child1 message={this.state.message}  callbackParent={this.onChildChanged} />
      </Card>
    )
  }
}

const BaseForm = Form.create()(warppedDemo)
export default BaseForm;