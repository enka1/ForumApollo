import React, { Component } from 'react'
import moment from 'moment'
import { Avatar } from 'antd'
import styled from 'styled-components'

import { history } from '../../routes'

export default class extends Component {
  render() {
    const { post } = this.props
    return (
      <CardStyle className="row">
        <div className="col-8 d-flex align-items-center">
          <Avatar
            title={post.creator.display_name}
            onClick={() => {
              history.push(`/user/${post.creator.id}`)
            }}
            alt={post.creator.display_name}
            size="large"
            className="mr-3 user"
            shape="circle"
            src={post.creator.avatar} />
          <div>
            <p
              className="title"
              onClick={() => {
                history.push(`/post/${post.id}`)
              }}>{post.title}</p>
            <p className="text-muted small m-0 lead">{moment(post.created_at).fromNow()}</p>
          </div>
          <div className="ml-auto lead align-self-end small">
            <span className="mr-3 text-dark">
              <span>{post.numOfComments}</span>
              <i className="far fa-comments ml-1"></i>
            </span>
            <span className="mr-3" style={{
              color: "#e57373"
            }}>
              <span>0</span>
              <i className="far fa-heart ml-1"></i>
            </span>
            <span className="mr-3" style={{
              color: "#1565c0"
            }}>
              <span>0</span>
              <i className="far fa-thumbs-up ml-1"></i>
            </span>
            <span className="mr-3" style={{
              color: "#673ab7"
            }}>
              <span>0</span>
              <i className="far fa-thumbs-down ml-1"></i>
            </span>
          </div>
        </div>
        <div className="col-4 border-box">
          asdasd
        </div>
      </CardStyle>
    )
  }
}

const CardStyle = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  &:hover{
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;
    transition: all .3s;
  }
  .border-box{
    border-left: 2px solid #d32f2f;
  }
  .title:hover{
    cursor: pointer;
    color: #ff8a65;
  }
  .title{
    margin:0;
    color: #009688;
    font-weight: bold;
  }
  .user{
    cursor: pointer
  }
`