import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const DEV_URL = 'http://localhost:3000/';
const PROD_URL = 'https://coolage-5fbe878e57bb.herokuapp.com/';
const API_ROOT = process.env.NODE_ENV === 'development' ? DEV_URL : PROD_URL;

const httpLink = new HttpLink({
  uri: `${API_ROOT}/graphql`
});

const authLink = setContext((_, { headers }) => {
  // Get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // Return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
