import React, {Component} from 'react'
import styled from 'styled-components'
import {Input, Icon} from 'antd'
import check from 'check-types'

import {history} from '../../routes'

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      displayName: '',
      username: '',
      password: '',
      error: {}
    }
    this.changeDisplayName = this
      .changeDisplayName
      .bind(this)
    this.changeUserName = this
      .changePassword
      .bind(this)
    this.changePassword = this
      .changePassword
      .bind(this)
  }
  changeDisplayName(event) {
    this.setState({displayName: event.target.value})
  }
  changeUserName(event) {
    this.setState({username: event.target.value})
  }
  changePassword(event) {
    this.setState({password: event.target.value})
  }

  displayNameValidate() {
    if (this.state.displayName.length === 0) {
      this.setState({
        error: {
          ...this.state.error,
          displayName: 'Please enter your display name!'
        }
      })
      return false
    }
    return true
  }

  usernanmeValidate() {
    if (this.state.username.length === 0) {
      this.setState({
        error: {
          ...this.state.error,
          username: 'Please enter your username!'
        }
      })
      return false
    }
    return true
  }

  passwordValidate() {
    if (this.state.password.length === 0) {
      this.setState({
        error: {
          ...this.state.error,
          password: 'Please enter your password!'
        }
      })
      return false
    }
    return true
  }

  async validateInput() {
    await this.setState({error: {}})
    await this.displayNameValidate()
    await this.usernanmeValidate()
    await this.passwordValidate()
  }

  registeredHandle() {
    this.validateInput()
    if (check.emptyObject(this.state.error)) {
      console.log("OK")
    } else 
      console.log("NOT")
  }

  render() {
    return (
      <Registered className="shadow">
        <div
          className="brand"
          title="Nhấn vào để về trang chủ"
          onClick={() => {
          history.push('/')
        }}>
          <img
            src="https://image.flaticon.com/icons/png/512/284/284772.png"
            className="icon"
            alt=""/>
          <span className="primary-header d-block mt-3">
            Remmie
          </span>
          <span className="secondary-header mb-3 d-block text-muted">Social</span>
        </div>
        <div className="form-group">
          <Input
            className="input"
            placeholder="Enter your display name"
            prefix={< Icon type = "rocket" style = {{ color: 'rgba(0,0,0,.25)' }}/>}
            value={this.state.displayName}
            onChange={this.changeDisplayName}/>
          <div>
            {this.state.error.displayName && (
              <p className="small mt-2 pl-1 text-left text-danger">
                <i className="mr-1 fas fa-exclamation-circle"></i>
                {this.state.error.displayName}</p>
            )}
          </div>
        </div>
        <div className="form-group">
          <Input
            className="input"
            placeholder="Enter your username"
            prefix={< Icon type = "user" style = {{ color: 'rgba(0,0,0,.25)' }}/>}
            value={this.state.username}
            onChange={this.changeUserName}/>
          <div>
            {this.state.error.username && (
              <p className="small mt-2 pl-1 text-left text-danger">
                <i className="mr-1 fas fa-exclamation-circle"></i>
                {this.state.error.username}</p>
            )}
          </div>
        </div>
        <div className="form-group">
          <Input
            className="input"
            placeholder="Enter your password"
            prefix={< Icon type = "lock" style = {{ color: 'rgba(0,0,0,.25)' }}/>}
            value={this.state.password}
            onChange={this.changePassword}/>
          <div>
            {this.state.error.password && (
              <p className="small mt-2 pl-1 text-left text-danger">
                <i className="mr-1 fas fa-exclamation-circle"></i>
                {this.state.error.password}</p>
            )}
          </div>
        </div>

        <div className="form-group">
          <div
            className="btn btn-danger btn-block button"
            onClick={() => this.registeredHandle()}>Sign up</div>
        </div>

      </Registered>
    )
  }
}

const Registered = styled.div `
  padding: 1rem 1.5rem;
  text-align: center;
  background-image: linear-gradient(rgba(255, 255, 255, .8), rgba(255, 255, 255, .8));
  .icon{
    height: 3rem;
  }
  .primary-header{
        font-family: 'Montserrat', sans-serif;
        font-size: 1.8rem;
        font-weight:lighter;
        text-transform:uppercase;
        letter-spacing: .2rem;
  }
    .secondary-header{
          text-transform:uppercase;
          letter-spacing: .1rem;
          font-size: 0.7rem;
  }
  .input{
    height: 3rem;
  }
  .brand{
    cursor: pointer;
  }
  .social-icon{
    cursor: pointer;
    font-size: 2rem;
  }
`