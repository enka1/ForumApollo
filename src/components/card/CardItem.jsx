import React, {Component} from 'react'
import {Avatar} from 'antd'
import moment from 'moment'
import styled from 'styled-components'

import {history} from '../../routes'

export default class CardItem extends Component {
  render() {
    return (
      <CardStyle className={this.props.className} style={this.props.style}>
        <div className={this.props.border
          ? "border-bot"
          : ""}>
          <div className="d-flex">
            <div title={this.props.display_name}>
              <Avatar
                onClick={() => {
                history.push(`/user/${this.props.userID}`)
              }}
                alt={this.props.display_name}
                size="large"
                className="user mr-3"
                shape="circle"
                src={this.props.avatarURL}/>
            </div>
            <div>
              <span className="title">{this.props.title}</span>
              <span
                className={"text-muted small m-0 lead " + ( this.props.comment
                ? "ml-2"
                : "d-block")}>{moment(this.props.createdAt).fromNow()}</span>
              <div
                className="lead mt-2"
                style={{
                fontSize: .85 + 'rem'
              }}>
                {this.props.content}
              </div>
              <div
                className={"d-flex align-items-center" + (this.props.comment
                ? "justify-content-start mt-3"
                : "justify-content-end mt-4")}>
                <i className="far fa-thumbs-up mr-2 post-react"></i>
                <i className="far fa-heart mr-2 post-react"></i>
                <i className="far fa-thumbs-down post-react"></i>
              </div>
            </div>
          </div>
        </div>
      </CardStyle>
    )
  }
}

const CardStyle = styled.div `
  .title{
    margin:0;
    color: #009688;
    font-weight: bold;
  }
  .border-bot{
    padding-bottom: 2rem;
    border-bottom: 0.5px solid #ffcdd2  ;
  }
  .user{
    cursor: pointer;
  }
  .post-react{
    cursor: pointer
  }
  .post-react:hover{
    color: #009688;
  }
`