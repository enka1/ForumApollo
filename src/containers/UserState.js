import React, {Component} from 'react'
import {graphql, compose} from 'react-apollo'
import axios from 'axios'

import {LoginBtnGroup, UserInfo} from '../components'
import USER_QUERY from '../graphql/query/client/user.query'
import saveUser from '../graphql/mutation/client/save_user.mutation'
class UserState extends Component {
  constructor(props){
    super(props)
    this.logOut = this.logOut.bind(this)
  }
  logOut() {
    axios.get('/logout')
    localStorage.setItem('auth', null)
    this
      .props
      .saveUser({
        variables: {
          username: null,
          display_name: null,
          avatar: null
        }
      })
  }
  render() {
    if (this.props.user.username) 
      return (<UserInfo user={this.props.user} logOut={this.logOut}/>)
    else 
      return <LoginBtnGroup/>
  }
}

export default compose(graphql(saveUser, {name: 'saveUser'}), graphql(USER_QUERY, {
  props: ({data: {
      user
    }}) => ({user})
}))(UserState)
