import React, {Component} from 'react'

import {UserStateController} from '../containers'
import {CardList} from '../components'

export default class extends Component {
  render() {
    return (
      <div>
        <div className="d-flex justify-content-end pr-5 pt-4">
          <UserStateController/>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-8">
              <CardList/>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
