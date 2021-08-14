import './../styles/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Country from './Country';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Countries Challenge</h2>
      </header>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/:_id" component={Country} />
        </Switch>
      </Router>
      </div>
  );
}

export default App;
