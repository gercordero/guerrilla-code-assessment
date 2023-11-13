import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const createApolloClient = () => {
  const httpLink = createHttpLink({
    uri: 'https://graphql.contentful.com/content/v1/spaces/vyvd54sdd5jm',
  });

  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = 'TVMyOuOqkY3kNh_wDrlce2zwju8TDkI-96twtPci8fk';
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
