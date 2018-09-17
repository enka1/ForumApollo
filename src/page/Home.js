import React, {Component} from 'react'

import {PostList} from '../containers'

export default class extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-8">
            <PostList/>
          </div>
        </div>
      </div>
    )
  }
}
