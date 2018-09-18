import React, {Component} from 'react'

import {Menu} from '../components'

export default function (WrappedComponent) {
  return class extends Component {
    render() {
      return (
        <div>
          <Menu/>
          <WrappedComponent {...this.props}/>
        </div>
      )
    }
  }
}