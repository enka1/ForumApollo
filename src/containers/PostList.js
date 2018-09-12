import React, {Component} from 'react'
import {Query} from 'react-apollo'
import check from 'check-types'

import {TopicItem} from '../components'
import {LATEST_POST_QUERY} from '../graphql/query/server/post.query'
export default class PostList extends Component {
  render() {
    return (
      <Query query={LATEST_POST_QUERY}>
        {({data}) => {
          if (check.nonEmptyObject(data)) 
            if (check.nonEmptyArray(data.posts)) {
              return data
                .posts
                .map(post => <TopicItem post={post} key={post.id}/>)
            }
          return null
        }}
      </Query>
    )
  }
}
