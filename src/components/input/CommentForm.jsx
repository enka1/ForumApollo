import React, {Component} from 'react'
import {compose, graphql} from 'react-apollo'
import {Avatar} from 'antd'
import styled from 'styled-components'

import {UserQuery} from '../../graphql/query/client/index'

class CommentForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isHover: false
    }
  }
  render() {
    if (this.props.user.id) 
      return (
        <Comment className={"d-flex align-items-center " + this.props.className}>
          <Avatar className="mr-3" src={this.props.user.avatar} size="large"/>
          <input
            onBlur={() => this.setState({isHover: false})}
            onFocus={() => this.setState({isHover: true})}
            placeholder="Viết bình luận..."
            className={"comment form-control " + (this.state.isHover
            ? "shadow"
            : "")}></input>
        </Comment>
      )
    return (
      <div className={"lead text-center text-muted " + this.props.className}>
        <i className="far fa-dizzy mr-3 text-muted"></i>Đăng nhập để có thể thêm bình luận cho bài viết
      </div>
    )
  }
}

const Comment = styled.div `
  .comment{
    border-radius: 18px;
    padding-left: 1rem;
  }
`

export default compose(graphql(UserQuery, {
  props: ({data: {
      user
    }}) => ({user})
}))(CommentForm)