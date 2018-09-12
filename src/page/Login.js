import React, {Component} from 'react'
import styled from 'styled-components'

import {Login} from '../containers'

export default class extends Component {
  render() {
    return (
      <LoginPage className="row w-100 m-0">
        <div className="login-gem-box col-lg-3">
          <Login/>
        </div>
      </LoginPage>
    )
  }
}

const LoginPage = styled.div `
    position: relative;
    background-image: url(https://images.alphacoders.com/820/thumb-1920-82043.jpg);
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
