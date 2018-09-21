import React, {Component} from 'react'
import {compose, graphql, Mutation} from 'react-apollo'
import {Avatar} from 'antd'
import styled from 'styled-components'

import {UserQuery} from '../../graphql/query/client/index'
import {createComment} from '../../graphql/mutation/server'
import {COMMENT_QUERY} from '../../graphql/query/server'

class CommentForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isHover: false,
      comment: ''
    }
  }
  render() {
    if (this.props.user.id) 
      return (
        <Comment className={"d-flex align-items-center " + this.props.className}>
          <Avatar className="mr-3" src={this.props.user.avatar} size="large"/>
          <Mutation
            mutation={createComment}
            update={(cache, {data: {
              createComment
            }}) => {
            let {comments} = cache.readQuery({
              query: COMMENT_QUERY,
              variables: {
                post_id: this.props.post_id
              }
            });
            cache.writeQuery({
              query: COMMENT_QUERY,
              variables: {
                post_id: this.props.post_id
              },
              data: {
                comments: [
                  ...comments,
                  createComment
                ]
              }
            });
            this.setState({comment: ''})
          }}>
            {(createComment) => (<input
              value={this.state.comment}
              onKeyUp={(e) => {
              if (e.keyCode === 13) 
                if (this.state.comment.trim().length > 0) 
                  createComment({
                    variables: {
                      user_id: this.props.user.id,
                      content: this.state.comment,
                      post_id: this.props.post_id
                    }
                  })
            }}
              onChange={(e) => this.setState({comment: e.target.value})}
              onBlur={() => this.setState({isHover: false})}
              onFocus={() => this.setState({isHover: true})}
              placeholder="Viết bình luận..."
              className={"comment form-control " + (this.state.isHover
              ? "shadow"
              : "")}/>)}

          </Mutation>
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