import gql from 'graphql-tag'

export const LATEST_POST_QUERY = gql `
{
  posts{
    id
    creator{
      id
      display_name
      avatar
    }
    title
    created_at
    numOfComments
  }
}
`

export const FETCH_POST_BY_ID = gql`
query postQuery($id:String!){
  posts(post:{_id:$id}){
    id
     creator{
      id
      username
      display_name
      avatar
    }
    title
    content
    created_at
  }
}

`