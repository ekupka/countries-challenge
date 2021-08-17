import './../styles/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Country from './Country';
import Header from './Header';
import { ApolloProvider, ApolloClient, createHttpLink, InMemoryCache} from '@apollo/client';

const httpLink = createHttpLink({
  uri: 'http://testefront.dev.softplan.com.br/'
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});


function App() {

  return (
    <Router>
      <ApolloProvider client={client}>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/:_id" component={Country} />
          </Switch>
        </div>
      </ApolloProvider>
    </Router>
  );
}

export default App;
