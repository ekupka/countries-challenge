import './../styles/App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Country from './Country';
import Header from './Header';

function App() {

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/:_id" component={Country} />
      </Switch>
    </div>
  );
}

export default App;
