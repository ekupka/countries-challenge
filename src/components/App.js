import './../styles/App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Country from './Country';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Countries Challenge</h2>
      </header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/:_id" component={Country} />
      </Switch>
    </div>
  );
}

export default App;
