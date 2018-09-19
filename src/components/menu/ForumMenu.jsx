import React, {Component} from 'react'
import styled from 'styled-components'

import {history} from '../../routes'
import {UserStateController} from '../../containers'

export default class ForumMenu extends Component {
  render() {
    return (
      <Menu className="navbar px-5 py-3 d-flex align-items-center">

        <span className="navbar-brand" href="#">
          <img
            src="https://image.flaticon.com/icons/png/512/284/284772.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""/>
          <span className="lead ml-3 brand" onClick={() => history.push('/')}>Remmie</span>
        </span>
        <div className="ml-auto">
          <UserStateController/>
        </div>
      </Menu>
    )
  }
}

const Menu = styled.nav `
  border-bottom: 0.2px solid #ce93d8;
  .brand:hover{
    cursor:pointer;
    color: #ff8a65;
  }
`