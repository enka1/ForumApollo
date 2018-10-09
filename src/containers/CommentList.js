import React, {Component} from 'react'
import {Query} from 'react-apollo'

import {COMMENT_QUERY} from '../graphql/query/server'
import {CardItem} from '../components'

export default class CommentList extends Component {
  render() {
    return (
      <Query
        query={COMMENT_QUERY}
        variables={{
        post_id: this.props.post_id
      }}>
        {({data: {
            comments
          }}) => {
          return comments
            ? comments.map(comment => <CardItem
              className="mt-5"
              key={comment.id}
              createdAt={comment.created_at}
              content={comment.content}
              display_name={comment.creator.display_name}
              userID={comment.creator.id}
              title={comment.creator.display_name}
              avatarURL={comment.creator.avatar}
              comment/>)
            : null
        }}
      </Query>
    )
  }
}
