import React from 'react';
import { Menu, Icon } from 'antd';
import menuData from  '../../common/menu.js'
import { NavLink } from 'react-router-dom'

const SubMenu = Menu.SubMenu;
class SiderMenu extends React.Component{
  componentWillMount() {
    const menuTreeNode = this.renderMenu(menuData)
    this.setState({
      menuTreeNode
    })
  }
  renderMenu=(data) => {
    return data.map( item => {
      if(item.children) {
        return (
          <SubMenu  key={item.path}  title={<span><Icon type={item.icon} />{item.name}</span>} style={{textAlign: 'left'}}>
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      return <Menu.Item title={item.name} key={item.path} style={{textAlign: 'left'}}>
        <NavLink to={item.path}>
          {item.name}
        </NavLink>
      </Menu.Item>
    })
  }
  render() {
    return(
      <div className="logo">
        <h1>IMMOC MS</h1>
        <Menu mode="inline" theme="dark">
          {this.state.menuTreeNode}
        </Menu>
      </div>
    )
  }
}

export default SiderMenu;