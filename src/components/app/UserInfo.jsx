import React, {Component} from 'react'
import {Avatar, Menu, Dropdown} from 'antd'

class UserController extends Component {
  render() {
    return (
      <Menu className="mt-2 p-0">
        <Menu.Item key="2">
          <span className="small pr-2">
            <i className="fas mr-2 text-muted fa-cog"></i>
            Settings</span>
        </Menu.Item>
        <Menu.Item key="3">
          <span className="small pr-2" onClick={()=>this.props.logOut()}>
            <i className="fas mr-2 text-muted fa-sign-out-alt"></i>
            Log out</span>
        </Menu.Item>
      </Menu>
    )
  }
}

export default class extends Component {
  render() {
    return (
      <div className="">
        <i className="far fa-comments fa-lg mr-4"></i>
        <i className="far fa-bell fa-lg mr-4"></i>
        <Dropdown overlay={<UserController logOut={this.props.logOut}/>} placement="bottomRight" trigger={['click']}>
          <Avatar
            style={{
            cursor: 'pointer'
          }}
            shape="circle"
            src={this.props.user.avatar}/>
        </Dropdown>

      </div>
    )
  }
}
