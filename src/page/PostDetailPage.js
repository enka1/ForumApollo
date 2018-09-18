import React, {Component} from 'react'
import {Query} from 'react-apollo'
import {CardItem} from '../components'

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
            console.log(post)
            return (<CardItem
              title={post.title}
              content={post.content}
              createdAt={post.created_at}
              avatarURL={post.creator.avatar}
              userID={post.creator.id}
              display_name={post.creator.display_name}/>)
          }
          return null
        }}
      </Query>
    )
  }
}
