import React, {Component} from 'react'
import moment from 'moment'
import {Avatar} from 'antd'
import styled from 'styled-components'

export default class extends Component {
  render() {
    return (
      <CardStyle className="row">
        <div className="col-8 d-flex align-content-center p-0">
          <Avatar
            size="large"
            className="mr-3"
            shape="circle"
            src={this.props.post.creator.avatar}/>
          <div>
            <p className="title">{this.props.post.title}</p>
            <p className="text-muted small m-0 lead">{moment(this.props.post.created_at).fromNow()}</p>
          </div>
        </div>
        <div className="col-4 text-center">
          <div className="row">
            <div className="col">
              <p className="h4 m-0">2</p>
              <p className="m-0">Answers</p>
            </div>
            <div className="col">
              <p className="h4 m-0">3</p>
              <p className="m-0">Views</p>
            </div>
          </div>
        </div>
      </CardStyle>
    )
  }
}

const CardStyle = styled.div `
  margin-top: 2rem;
  margin-bottom: 2rem;
  .title:hover{
    cursor: pointer;
    color: #ff8a65;
  }
  .title{
    margin:0;
    color: #009688;
    font-weight: bold;
  }
`