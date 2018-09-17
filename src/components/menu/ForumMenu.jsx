import React, {Component} from 'react'
import styled from 'styled-components'

import {UserStateController} from '../../containers'

export default class ForumMenu extends Component {
  render() {
    return (
      <Menu className="navbar px-5 py-3">
        <div className="container">
          <span className="navbar-brand" href="#">
            <img
              src="https://image.flaticon.com/icons/png/512/284/284772.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=""/>
            <span className="lead ml-3">Remmie</span>
          </span>

          <UserStateController/>

        </div>
      </Menu>
    )
  }
}

const Menu = styled.nav `
  border-bottom: 0.2px solid #ce93d8;
`