import React from 'react';
import { Layout, Breadcrumb, Card  } from 'antd';
import './index.less'
import SiderMenu from '../sider/index'
import Headers from '../header/index'
import {connect} from 'react-redux'

const { Header, Footer, Sider, Content } = Layout;
class Home extends React.Component{
  render() {
    return (
      <Layout>
        <Sider>
          <SiderMenu />
        </Sider>
        <Layout>
          <Header><Headers /></Header>
          <Content style={{padding: '15px'}}>
            <Card
              style={{ width: "100%",textAlign: "left" }}
            >
              <Breadcrumb>
                <Breadcrumb.Item>{this.props.menuName}</Breadcrumb.Item>
                <Breadcrumb.Item><a href="">Application Center</a></Breadcrumb.Item>
                <Breadcrumb.Item><a href="">Application List</a></Breadcrumb.Item>
                <Breadcrumb.Item>An Application</Breadcrumb.Item>
              </Breadcrumb>
            </Card>

            {this.props.children}
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    )
  }
}

const mapStateToProps = state => {
  return {
    // menuName: state.menuName
  }
}
export default connect(mapStateToProps)(Home);