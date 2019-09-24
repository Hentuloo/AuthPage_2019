import React from 'react';

import { Router, Route } from 'react-router-dom';
import history from 'config/history';

import withAuth from 'hoc/withAuth';
import AuthPage from './AuthPage';
import MainPage from './MainPage';

function App() {
  return (
    <Router history={history}>
      <div className="App">
        <Route path="/" exact component={withAuth(MainPage)} />
        <Route path="/login" component={AuthPage} />
        <Route path="/register" component={AuthPage} />
      </div>
    </Router>
  );
}

export default App;
