import React, {Component} from 'react'
import {Avatar} from 'antd'
import moment from 'moment'
import styled from 'styled-components'

import {history} from '../../routes'

export default class CardItem extends Component {
  render() {
    return (
      <CardStyle>
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
              <p className="title">{this.props.title}</p>
              <p className="text-muted small m-0 lead">{moment(this.props.createdAt).fromNow()}</p>
              <div
                className="lead mt-2"
                style={{
                fontSize: .85 + 'rem'
              }}>
                {this.props.content}
              </div>
              <div
                className={"d-flex align-items-center mt-4 " + (this.props.comment
                ? "justify-content-start"
                : "justify-content-end")}>
                <i className="far fa-thumbs-up mx-2 post-react"></i>
                <i className="far fa-heart mx-2 post-react"></i>
                <i className="far fa-thumbs-down mx-2 post-react"></i>
              </div>
            </div>
          </div>

        </div>
      </CardStyle>
    )
  }
}

const CardStyle = styled.div `
  padding-top: 2rem;
  padding-bottom: 2rem;
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