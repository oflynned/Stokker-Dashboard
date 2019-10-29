import { ApolloClient, HttpLink, ApolloLink, InMemoryCache } from 'apollo-boost';
import { onError } from 'apollo-link-error';
import { graphQLEndpoint } from './endpoints';
import { getKey, KEY_SESSION } from '../session/localCache';

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) =>
      console.error(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );
  }
  if (networkError) {
    console.error(`[Network error]: ${networkError}`);
  }
});

const links = [];
links.push(errorLink);
links.push(
  new HttpLink({
    uri: graphQLEndpoint,
    headers: {
      'x-session-id': getKey(KEY_SESSION)
    },
  }),
);

const client = new ApolloClient({
  link: ApolloLink.from(links),
  cache: new InMemoryCache(),
});

export default client;
