import React, {Component} from 'react'
import {Query} from 'react-apollo'

import {CommentForm, CardItem} from '../components'
import {CommentList} from '../containers'
import {FETCH_POST_BY_ID} from '../graphql/query/server/post.query'
export default class PostDetail extends Component {

  render() {
    return (
      <Query
        query={FETCH_POST_BY_ID}
        variables={{
        id: this.props.match.params.id
      }}>
        {({data: {
            posts
          }}) => {
          if (posts) {
            let post = posts[0]
            return (
              <div className="container px-5">
                <CardItem
                  style={{
                  paddingTop: 2 + "rem"
                }}
                  border
                  title={post.title}
                  content={post.content}
                  createdAt={post.created_at}
                  avatarURL={post.creator.avatar}
                  userID={post.creator.id}
                  display_name={post.creator.display_name}/>
                <CommentList post_id={this.props.match.params.id}/>
                <CommentForm post_id={this.props.match.params.id} className="mt-5"/>

              </div>
            )
          }
          return null
        }}
      </Query>
    )
  }
}
