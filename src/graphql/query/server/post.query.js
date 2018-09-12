import gql from 'graphql-tag'

export const LATEST_POST_QUERY = gql `
{
  posts{
    id
    creator{
      display_name
      avatar
    }
    title
    created_at
  }
}
`