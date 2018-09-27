import React, {Component} from 'react'
import styled from 'styled-components'

import {history} from '../../routes'

export default class SignIn extends Component {
  render() {
    return (
      <div>
        <SignUpStyle className="lead mr-4" onClick={() => history.push('/login')}>
          Đăng nhập
        </SignUpStyle>
        <SignUpStyle className="lead" onClick={() => history.push('/register')}>
          Đăng kí
        </SignUpStyle>
      </div>
    )
  }
}

const SignUpStyle = styled.span `
  cursor:pointer;
  font-size: 1rem;
  &:hover{
    color:#ff8a65;
  }
`
