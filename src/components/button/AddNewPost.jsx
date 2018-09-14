import React, {Component} from 'react'
import {Popover, Icon} from 'antd'
import styled from 'styled-components'

import {PostForm} from '../'

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      createNewPost: false
    }
    this.closePostForm = this
      .closePostForm
      .bind(this)
  }
  closePostForm() {
    this.setState({createNewPost: false})
  }
  openPostForm() {
    this.setState({createNewPost: true})
  }
  render() {
    return (
      <AddNewPostStyle>
        <Popover
          placement="topRight"
          content={(
          <p className="small" style={{
            maxWidth: 15 + 'rem'
          }}>Hãy
            bắt đầu một chủ đề mới nào! Chúng tôi tin chắc bạn sẽ được sự giúp đỡ và hỗ trợ
            nhiệt tình từ cộng đồng &ensp;
            <span role="img" aria-label="icon">😊 😊 😊</span>
            <br/>
            Những lời nói cảm ơn chân thành sẽ giúp mọi người gần nhau hơn đó &ensp;
            <span role="img" aria-label="icon">😉</span>
          </p>
        )}
          title="Tạo bài viết mới">
          <Icon
            type="plus-circle"
            onClick={() => this.openPostForm()}
            theme="outlined"
            className="add-new-icon"/>
        </Popover>
        <PostForm
          closePostForm={this.closePostForm}
          visible={this.state.createNewPost}/>
      </AddNewPostStyle>
    )
  }
}

const AddNewPostStyle = styled.div `
    .add-new-icon{
        cursor: pointer;
        color: #ef9a9a;
        font-size: 2.7rem;
    }
    .add-new-icon:hover{
        color:#e53935;
    }
`