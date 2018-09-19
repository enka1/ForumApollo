import React, {Component} from 'react'
import {Query} from 'react-apollo'
import {CardItem, CommentForm} from '../components'

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
                  border
                  title={post.title}
                  content={post.content}
                  createdAt={post.created_at}
                  avatarURL={post.creator.avatar}
                  userID={post.creator.id}
                  display_name={post.creator.display_name}/>
                <CardItem
                  comment
                  title={"Enka"}
                  content="I think you should try another function"/>
                <CommentForm className="mt-3"/>
              </div>
            )
          }
          return null
        }}
      </Query>
    )
  }
}
