import React, {Component} from 'react'

import {history} from '../../routes'

const buttonStyle = {
  width: 6 + 'rem'
}

export default class SignIn extends Component {
  render() {
    return (
      <div>
        <div
          className="btn px-3 btn-outline-success mr-2 lead"
          onClick={() => {
          history.push('/login')
        }}
          style={buttonStyle}>Log in</div>
        <div className="btn px-3 btn-danger lead" style={buttonStyle}>Sign up</div>
      </div>
    )
  }
}
