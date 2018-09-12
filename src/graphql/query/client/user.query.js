import gql from 'graphql-tag'

export default gql `
    {
        user @client{
            username,
            display_name,
            avatar
        }
    }
`