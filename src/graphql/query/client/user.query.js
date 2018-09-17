import gql from 'graphql-tag'

export default gql `
    {
        user @client{
            id
            username
            display_name
            avatar
        }
    }
`