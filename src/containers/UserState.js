import React, {Component} from 'react'

import {LoginBtnGroup, UserInfo} from '../components'
import {log_out} from '../actions/authenticate/log_out.action'

class UserState extends Component {
  constructor(props) {
    super(props)
    this.logOut = this
      .logOut
      .bind(this)
  }
  logOut() {
    this
      .props
      .dispatch(log_out())
  }
  render() {
    if (this.props.user._id) 
      return (<UserInfo logOut={this.logOut} user={this.props.user}/>)
    else 
      return <LoginBtnGroup/>
  }
}
