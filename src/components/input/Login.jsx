import React, {PureComponent} from 'react'
import debounce from 'lodash.debounce'
import {Divider} from 'antd'
import styled from 'styled-components'

import {history} from '../../routes'

export default class Login extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      error: ''
    }
    this.usernameOnChange = this
      .usernameOnChange
      .bind(this)
    this.passwordOnChange = this
      .passwordOnChange
      .bind(this)
    this.passwordOnChangeDebounce = debounce(password => this.setState({password}), 50)
  }

  usernameOnChange(username) {
    console.log('change username')
    this.setState({username})
  }

  passwordOnChange(e) {
    this.passwordOnChangeDebounce(e.target.value)
  }

  componentWillReceiveProps(nextProps) {
    let error = nextProps.error
    if (error) {
      this.setState({error})
    }
  }

  validateInput() {
    if (this.state.username.length === 0 && this.state.password.length === 0) {
      this.setState({error: 'Xin nhập tên đăng nhập và mật khẩu '})
      return false
    } else if (this.state.username.length === 0) {
      this.setState({error: 'Xin nhập tên đăng nhập'})
      return false
    } else if (this.state.password.length === 0) {
      this.setState({error: 'Xin nhập mật khẩu'})
      return false
    } else {
      this.setState({error: ''})
      return true
    }
  }

  render() {
    return (
      <LoginForm className="shadow">
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
        <form>
          <div className="form-group">
            <input
              autoComplete="username"
              onChange={debounce(() => console.log('stop typing'), 500, {trailing: true})}
              className="form-control input"
              placeholder="Username..."/>
          </div>
          <div className="form-group">
            <input
              autoComplete={"current-password"}
              value={this.state.password}
              onChange={this.passwordOnChange}
              className="form-control input"
              type="password"
              placeholder="Password...."
              onKeyUp={(e) => {
              if (e.keyCode === 13) {
                this
                  .props
                  .localStrategyLoginHandle(this.state.username, this.state.password)
              }
            }}/>
          </div>
        </form>
        {this.state.error && (
          <p className="small mt-2 pl-1 text-left text-danger">
            <i className="mr-1 fas fa-exclamation-circle"></i>
            {this.state.error}</p>
        )}
        <div className="form-group">
          <div
            className="btn btn-dark btn-block button"
            onClick={() => this.props.localStrategyLoginHandle(this.state.username, this.state.password)}>Log In</div>
        </div>
        <a href="">Forgot your password ?</a>
        <Divider>Or</Divider>
        <div className="mb-3">
          <i
            onClick={() => this.props.googleStategyLoginHandle()}
            title="Google"
            className="fab fa-google-plus-square social-icon mx-2"
            style={{
            color: "#df5138"
          }}></i>
          <i
            title="Facebook"
            className="fab fa-facebook social-icon mx-2"
            style={{
            color: "#3b5998"
          }}></i>
          <i
            title="Github"
            className="fab fa-github-square social-icon mx-2"
            style={{
            color: "#337ab7"
          }}></i>
        </div>
      </LoginForm>
    )
  }
}

const LoginForm = styled.div `
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
  .brand{
    cursor: pointer;
  }
  .social-icon{
    cursor: pointer;
    font-size: 2rem;
  }
`