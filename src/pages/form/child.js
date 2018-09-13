import React from 'react';
import {Card, Button, Checkbox} from 'antd';

class Child1 extends React.Component{
  handleChild = () => {
    let parentMessage = '我是子组件的信息'
    console.log('parentMessage='+parentMessage)
    this.props.callbackParent(parentMessage)
  }
  render() {
    return (
      <div>
        <Card title="子组件">
          我是子组件
          <Button onClick={this.handleChild}>子组件按钮</Button>
          <Checkbox>checkbox</Checkbox>
          <hr/>
          message:{this.props.message}
        </Card>
      </div>
    )
  }
}

export default Child1;