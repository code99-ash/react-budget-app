import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Navbar
import HeaderNav from './components/HeaderNav';
// Pages
import Overview from './pages/Overview';
import Income from './pages/Income';
import Budget from './pages/Budget';

function App() {
  return (
    <Router>
      <HeaderNav />
      <div className="container">
        <Switch>
          <Route path="/" exact component={Overview} />
          <Route path="/income" component={Income} />
          <Route path="/budget" component={Budget} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
