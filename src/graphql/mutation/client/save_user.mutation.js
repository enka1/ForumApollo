import gql from 'graphql-tag'

export default gql `
    mutation saveUser($display_name: String!, $avatar: String, $_id: String!){
        saveUser(display_name: $display_name, avatar: $avatar, id: $_id) @client{
            __typename
            id
            display_name
            avatar
        }
    }
`