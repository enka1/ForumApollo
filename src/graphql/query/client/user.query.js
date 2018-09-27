import gql from 'graphql-tag'

export default gql `
    {
        user @client{
            id
            display_name
            avatar
        }
    }
`