import React, {Component} from 'react'
import {compose, graphql} from 'react-apollo'

import {history} from '../routes'
import {UserQuery} from '../graphql/query/client'
import {AddNewPostBtn} from '../components'

class CreatePost extends Component {
  render() {
    const {user} = this.props
    user.id
      ? (
        <div className="d-flex justify-content-end my-3">
          <AddNewPostBtn/>
        </div>
      )
      : (
        <div className="d-flex justify-content-end border-bottom py-4">
          <button
            className="lead btn btn-outline-dark"
            onClick={() => {
            history.push('/login')
          }}
            style={{
            fontSize: .9 + "rem"
          }}>
            <i className="far fa-gem mr-2"></i>Đăng nhập để thêm bài viết</button>
        </div>
      )
  }
}

export default compose(graphql(UserQuery, {
  props: ({data: {
      user
    }}) => ({user})
}))(CreatePost)