import gql from 'graphql-tag'

export default gql `
    mutation saveUser($username: String!, $display_name: String!, $avatar: String, $_id: String!){
        saveUser(username: $username, display_name: $display_name, avatar: $avatar, id: $_id) @client{
            __typename
            id
            username
            display_name
            avatar
        }
    }
`