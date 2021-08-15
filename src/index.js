import React from 'react';
import ReactDOM from 'react-dom';
import '@fontsource/roboto';
import './styles/index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import { ApolloProvider, ApolloClient, createHttpLink, InMemoryCache} from '@apollo/client';

const httpLink = createHttpLink({
  uri: 'http://testefront.dev.softplan.com.br/'
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

ReactDOM.render(
  <Router>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </ Router>,

  document.getElementById('root')
);
