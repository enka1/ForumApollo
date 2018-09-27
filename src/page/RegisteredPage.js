import React, {Component} from 'react'
import styled from 'styled-components'

import {RegisteredForm} from '../components'

export default class extends Component {
  render() {
    return (
      <LoginPage className="row w-100 m-0">
        <div className="login-gem-box col-lg-3">
          <RegisteredForm/>
        </div>
      </LoginPage>
    )
  }
}

const LoginPage = styled.div `
    position: relative;
    background-image: url(https://images7.alphacoders.com/395/395363.jpg);
    min-height: 100vh;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    .login-gem-box{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`
