import React from 'react';

import { Router, Route, Switch } from 'react-router-dom';
import history from 'config/history';

import withAuth from 'hoc/withAuth';
import AuthPage from './AuthPage';
import MainPage from './MainPage';

function App() {
  return (
    <Router history={history} basename={process.env.PUBLIC_URL}>
      <Switch className="App">
        <Route path="/" exact component={withAuth(MainPage)} />
        <Route path="/login" component={AuthPage} />
        <Route path="/register" component={AuthPage} />
      </Switch>
    </Router>
  );
}

export default App;
