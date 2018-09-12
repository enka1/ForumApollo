import {ApolloClient} from 'apollo-client'
import {InMemoryCache} from 'apollo-cache-inmemory'
import {ApolloLink} from 'apollo-link'
import {HttpLink} from 'apollo-link-http'
import {withClientState} from 'apollo-link-state'
import USER_QUERY from '../graphql/query/client/user.query'

const cache = new InMemoryCache()
const clientState = withClientState({
  cache,
  defaults: {
    user: {
      __typename: 'AuthenticateUser',
      username: null,
      display_name: null,
      avatar: null
    }
  },
  resolvers: {
    Mutation: {
      saveUser: (_, args, {cache}) => {
        let data = {
          user: {
            __typename: 'AuthenticateUser',
            ...args
          }
        }
        cache.writeQuery({query: USER_QUERY, data})
        return null
      }
    }
  }
})
export const client = new ApolloClient({
  connectToDevTools: true,
  link: ApolloLink.from([
    clientState,
    new HttpLink({uri: 'http://localhost:3001/graphql'})
  ]),
  cache
})