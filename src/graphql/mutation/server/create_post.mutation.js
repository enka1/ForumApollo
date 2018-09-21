import gql from 'graphql-tag'

export default gql `
mutation createPost($author_id:String!, $title:String!, $content:String!){
  createPost(post:{author_id:$author_id, title:$title, content:$content}){
    id
    creator{
      id
      display_name
      avatar
    }
    title
    created_at
  }
}
`