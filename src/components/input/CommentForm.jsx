import React, { Component } from 'react'
import { compose, graphql, Mutation } from 'react-apollo'
import { debounce } from 'lodash'
import { Avatar } from 'antd'
import styled from 'styled-components'

import { UserQuery } from '../../graphql/query/client/index'
import { createComment } from '../../graphql/mutation/server'
import { COMMENT_QUERY } from '../../graphql/query/server'

class CommentForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isHover: false,
      comment: ''
    }
  }
  commentOnChangeHandle(event) {
    debounce(() => {
      this.setState({ comment: event.target.value })
    }, 300)
  }
  submitHandle(event, createComment) {
    debounce(() => {
      if (event.keyCode === 13)
        if (this.state.comment.trim().length > 0) {
          createComment({
            variables: {
              user_id: this.props.user.id,
              content: this.state.comment,
              post_id: this.props.post_id
            }
          })
        }
    }, 300)
  }
  render() {
    const { user, className, post_id } = this.props
    const { comment, isHover } = this.state
    if (user.id)
      return (
        <Comment className={"d-flex align-items-center " + className}>
          <Avatar className="mr-3" src={user.avatar} size="large" />
          <Mutation
            mutation={createComment}
            update={(cache, { data: {
              createComment
            } }) => {
              let { comments } = cache.readQuery({
                query: COMMENT_QUERY, variables: {
                  post_id
                }
              });
              cache.writeQuery({
                query: COMMENT_QUERY,
                variables: {
                  post_id
                },
                data: {
                  comments: [
                    ...comments,
                    createComment
                  ]
                }
              });
              this.setState({ comment: '' })
            }}>
            {(createComment, { error }) => {
              if (error) {
                return "Error .error..."
              }
              return (<input
                value={comment}
                onKeyUp={e => this.submitHandle(e, createComment)}
                onChange={this.commentOnChangeHandle}
                onBlur={() => this.setState({ isHover: false })}
                onFocus={() => this.setState({ isHover: true })}
                placeholder="Viết bình luận..."
                className={"comment form-control " + (isHover
                  ? "shadow"
                  : "")} />)
            }}

          </Mutation>
        </Comment>
      )
    return (
      <div className={"lead text-center text-muted " + className}>
        <i className="far fa-dizzy mr-3 text-muted"></i>Đăng nhập để có thể thêm bình luận cho bài viết
      </div>
    )
  }
}

const Comment = styled.div`
  .comment{
    border-radius: 18px;
    padding-left: 1rem;
  }
`
export default compose(graphql(UserQuery, {
  props: ({ data: {
    user
  } }) => ({ user })
}))(CommentForm)
