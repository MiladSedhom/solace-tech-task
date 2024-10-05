import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { ReactNode } from 'react'

const URL = 'http://localhost:3000/graphql'

const client = new ApolloClient({
	uri: URL,
	cache: new InMemoryCache(),
})
const ApolloAppProvider = ({ children }: { children: ReactNode }) => {
	return <ApolloProvider client={client}>{children}</ApolloProvider>
}
export default ApolloAppProvider
