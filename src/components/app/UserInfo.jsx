import React, {Component} from 'react'
import {Avatar, Menu, Dropdown, Icon, Popover} from 'antd'
import styled from 'styled-components'
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
          <span className="small pr-2" onClick={() => this.props.logOut()}>
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
      <div>
        <Icon type="notification" theme="outlined" className="mr-4 h5"/>
        <Icon type="user-add" theme="outlined" className="mr-4 h5"/>
        <Icon type="message" theme="outlined" className="mr-4 h5"/>
        <Dropdown
          overlay={< UserController logOut = {
          this.props.logOut
        } />}
          placement="bottomRight"
          trigger={['click']}>
          <Avatar
            style={{
            cursor: 'pointer'
          }}
            shape="circle"
            src={this.props.user.avatar}/>
        </Dropdown>
        <AddNewStyle>
          <Popover
            placement="topRight"
            content={(
            <p
              className="small font-weight-bold"
              style={{
              maxWidth: 15 + 'rem'
            }}>&ensp;Hãy
              bắt đầu một chủ đề mới nào! Chúng tôi tin chắc bạn sẽ được sự giúp đỡ và hỗ trợ
              nhiệt tình từ cộng đồng 😊 😊 😊
              <br/>
              &ensp;Những lời nói cảm ơn chân thành sẽ giúp mọi người gần nhau hơn đó 😉
            </p>
          )}
            title="Tạo bài viết mới">
            <Icon type="plus-circle" theme="outlined" className="add-new-icon"/>
          </Popover>

        </AddNewStyle>
      </div>
    )
  }
}

const AddNewStyle = styled.div `
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  .add-new-icon{
    cursor: pointer;
    color: #ef9a9a;
    font-size: 2.7rem;
  }
  .add-new-icon:hover{
    color:#e53935;
  }
`