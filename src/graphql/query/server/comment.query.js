import gql from 'graphql-tag'

export default gql`
query commentQuery($post_id: String!) {
  comments(comment: {post_id: $post_id}) {
    id
    content
    created_at
    creator {
      id
      display_name
      avatar
    }
  }
}

`