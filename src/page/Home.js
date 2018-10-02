import React, {Component} from 'react'
import styled from 'styled-components'

import {PostList} from '../containers'
import {CreatePostController} from '../containers'
export default class extends Component {
  render() {
    return (
      <HomePage className="container">
        <CreatePostController/>
        <PostList/>
      </HomePage>
    )
  }
}

const HomePage = styled.div `
  
`