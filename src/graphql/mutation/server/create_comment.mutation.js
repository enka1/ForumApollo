import gql from 'graphql-tag'

export default gql `
mutation createComment($user_id: String!, $content: String!, $post_id: String!) {
  createComment(comment: {user_id: $user_id, content: $content, post_id: $post_id}) {
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