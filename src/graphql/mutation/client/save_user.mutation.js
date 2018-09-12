import gql from 'graphql-tag'

export default gql `
    mutation saveUser($username: String!, $display_name: String!, $avatar: String){
        saveUser(username: $username, display_name: $display_name, avatar: $avatar) @client{
            __typename,
            username,
            display_name,
            avatar
        }
    }
`