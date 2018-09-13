import React from 'react';
import './index.less'
import { Row, Col, Form, Input, Button, Select } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;

class Forms extends React.Component{
  state={
    formData: {
      name: '',
      mobile:'',
      icdName: '',
      sex: '',
      isdeath:'',
      startAge: '',
      endAge: '',
    }
  }
  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }
  onSearch =() =>  {

    this.props.form.validateFields((err, values) => {
      if (!err) {

      }
      console.log('Received values of form: ', this.formData);
    });
  }
  render() {
    const { getFieldDecorator, getFieldValue, getFieldsValue  }  = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 4 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 20 },
        sm: { span: 20 },
      },
    };
    return (
      <div className="patient-list">
        <Row>
          <Form>
            <Col span={6}>
              <FormItem
                {...formItemLayout}
                label="姓名">
                {getFieldDecorator('name', {

                })(
                  <Input placeholder="请输入姓名" />
                )}
              </FormItem>
            </Col>
            <Col span={6}>
              <FormItem
                {...formItemLayout}
                label="联系电话">
                {getFieldDecorator('mobile', {

                })(
                  <Input placeholder="请输入联系电话" />
                )}
              </FormItem>
            </Col>
            <Col span={6}>
              <FormItem
                {...formItemLayout}
                label="疾病名称">
                {getFieldDecorator('icdName', {

                })(
                  <Input placeholder="请输入疾病名称" />
                )}
              </FormItem>
            </Col>
            <Col span={6}>
              <FormItem
                {...formItemLayout}
                label="性别">
                {getFieldDecorator('sex', {

                })(
                  <Select>
                    <Option value="">全部</Option>
                    <Option value="男">男</Option>
                    <Option value="女">女</Option>
                  </Select>
                )}
              </FormItem>
            </Col>
            <Col span={6}>
              <FormItem
                {...formItemLayout}
                label="标签">
                {getFieldDecorator('isdeath', {

                })(
                  <Select>
                    <Option value="">全部</Option>
                    <Option value="0">正常</Option>
                    <Option value="1">死亡</Option>
                  </Select>
                )}
              </FormItem>
            </Col>
            <Col span={6}>
            <FormItem
              label="年龄"
              {...formItemLayout}
            >
              <Col span={11}>
                <FormItem>
                {getFieldDecorator('startAge', {

                })(
                  <Input placeholder="0" />
                )}
                </FormItem>
              </Col>
              <Col span={2}>
                <span style={{ display: 'inline-block', width: '100%', textAlign: 'center' }}>
                  -
                </span>
              </Col>
              <Col span={11}>
                <FormItem>
                  {getFieldDecorator('endAge', {
                  })(
                    <Input placeholder="0" />
                  )}
                </FormItem>
              </Col>
            </FormItem>
            </Col>
            <Col span={6}>
            <FormItem>
              <Button
                type="primary"
                onClick={this.onSearch}
              >
                查询
              </Button>
            </FormItem>
            </Col>
          </Form>
        </Row>
      </div>
    )
  }
}
const SearchForm = Form.create()(Forms);
export default SearchForm;