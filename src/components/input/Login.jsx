import React, {Component} from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'
import check from 'check-types'

import {loginAction} from '../../actions/authenticate/login.actions'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      error: ''
    }
  }
  validateInput() {
    if (check.emptyString(this.state.username) && check.emptyString(this.state.password)) {
      this.setState({error: 'Xin nhập tên đăng nhập và mật khẩu '})
      return false
    } else if (check.emptyString(this.state.username)) {
      this.setState({error: 'Xin nhập tên đăng nhập'})
      return false
    } else if (check.emptyString(this.state.password)) {
      this.setState({error: 'Xin nhập mật khẩu'})
      return false
    } else {
      this.setState({error: ''})
      return true
    }
  }
  async handleLogIn() {
    if (this.validateInput()) {
      await this
        .props
        .dispatch(loginAction(this.state.username, this.state.password))
      if (this.props.user.error) {
        this.setState({error: this.props.user.error.msg})
      }
    }
  }
  render() {
    return (
      <LoginForm className="shadow">
        <div className="bookstore" onClick={() => this.goToIndexPage()}>
          <img
            src="https://image.flaticon.com/icons/png/512/284/284772.png"
            className="icon"
            alt=""/>
          <span className="primary-header d-block mt-3">
            Emilia
          </span>
          <span className="secondary-header mb-3 d-block text-muted">Bookstore</span>
        </div>
        <div className="form-group">
          <input
            value={this.state.username}
            onChange={(e) => this.setState({username: e.target.value})}
            className="form-control input"
            placeholder="Username"/>
        </div>
        <div className="form-group">
          <input
            value={this.state.password}
            onChange={(e) => this.setState({password: e.target.value})}
            className="form-control input"
            placeholder="Password"
            type="password"/>
        </div>
        {check.nonEmptyString(this.state.error) && (
          <p className="small mt-2 pl-1 text-left text-danger">
            <i className="mr-1 fas fa-exclamation-circle"></i>
            {this.state.error}</p>
        )}
        <div className="form-group">
          <div
            className="btn btn-dark btn-block button"
            onClick={() => this.handleLogIn()}>Log In</div>
        </div>
        <a href="">Forgot your password ?</a>
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
  .bookstore{
    cursor: pointer;
  }
`

const mapStateToProps = (state) => {
  return {user: state.user}
}

export default connect(mapStateToProps)(Login)