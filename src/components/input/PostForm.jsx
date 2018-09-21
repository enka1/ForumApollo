import React, {Component} from 'react'
import {Mutation, compose, graphql} from 'react-apollo'
import {Modal, Input} from 'antd'

import {createPost} from '../../graphql/mutation/server'
import userQuery from '../../graphql/query/client/user.query'
import {LATEST_POST_QUERY} from '../../graphql/query/server/post.query'

class PostForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      content: '',
      error: {}
    }
    this.resetForm = this
      .resetForm
      .bind(this)
  }
  resetForm() {
    this.setState({title: '', content: '', error: {}})
  }
  async validateForm() {
    let valid = true
    if (this.state.title.trim().length === 0) {
      valid = false
      await this.setState({
        error: {
          ...this.state.error,
          title: 'Xin bạn hãy nhập tiêu đề cho bài viết của mình.'
        }
      })
    }
    if (this.state.content.trim().length === 0) {
      valid = false
      this.setState({
        error: {
          ...this.state.error,
          content: 'Xin bạn hãy nhập nội dung cho bài viết của mình.'
        }
      })
    }
    return valid
  }
  render() {
    return (
      <Mutation
        mutation={createPost}
        update={(cache, {data: {
          createPost
        }}) => {
        let {posts} = cache.readQuery({query: LATEST_POST_QUERY});
        cache.writeQuery({
          query: LATEST_POST_QUERY,
          data: {
            posts: [
              ...posts,
              createPost
            ]
          }
        });
        this.resetForm();
        this
          .props
          .closePostForm()
      }}>
        {(createPost, {loading, error}) => (
          <Modal
            confirmLoading={loading}
            onOk={async() => {
            if (await this.validateForm()) {
              createPost({
                variables: {
                  author_id: this.props.user.id,
                  title: this.state.title,
                  content: this.state.content
                }
              })
            }
          }}
            onCancel={() => this.props.closePostForm()}
            title="Tạo bài đăng mới"
            okText="Đăng"
            okButtonDisabled={true}
            okButtonProps={{
            style: {
              backgroundColor: "#66bb6a",
              minWidth: 4 + 'rem'
            }
          }}
            cancelButtonProps={{
            style: {
              backgroundColor: "#ef5350",
              color: "white",
              minWidth: 4 + 'rem'
            }
          }}
            closable={false}
            cancelText="Hủy"
            visible={this.props.visible}>
            {this.state.error.title && (
              <p className="text-danger small lead">
                <i className="fas fa-exclamation mr-2"></i>{this.state.error.title}</p>
            )}
            <div className="form-group">
              <label htmlFor="" className="mb-3 lead">
                <i className="fas fa-compact-disc mr-2"></i>Tiêu đề bài viết:</label>
              <input
                value={this.state.title}
                onChange={async(e) => {
                await this.setState({title: e.target.value});
                if (this.state.title.trim().length !== 0) {
                  this.setState({
                    error: {
                      ...this.state.error,
                      title: null
                    }
                  })
                }
              }}
                type="text"
                className="lead form-control mb-3 p-2"/>
            </div>
            <label htmlFor="" className="mb-3 lead">
              <i className="fas fa-feather-alt mr-2"></i>Nội dung bài viết:</label>
            <Input.TextArea
              className="lead p-2"
              style={{
              fontSize: .9 + "rem"
            }}
              value={this.state.content}
              onChange={async(e) => {
              await this.setState({content: e.target.value});
              if (this.state.content.trim().length !== 0) {
                this.setState({
                  error: {
                    ...this.state.error,
                    content: null
                  }
                })
              }
            }}
              autosize={{
              maxRows: 12,
              minRows: 8
            }}/> {this.state.error.content && (
              <p className="text-danger small lead mt-3">
                <i className="fas fa-exclamation mr-2"></i>{this.state.error.content}</p>
            )}
          </Modal>
        )}
      </Mutation>

    )
  }
}

export default compose(graphql(userQuery, {
  props: ({data: {
      user
    }}) => ({user})
}))(PostForm)