import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/header';
import Home from './components/home';
import Job from './components/job';

const App = () => (
  <div className='App'>
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/job/:id'>
          <Job />
        </Route>
      </Switch>
    </Router>
  </div>
);

export default App;
