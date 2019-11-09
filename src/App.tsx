import React from 'react';
import './App.css';
import {
  Switch,
  BrowserRouter,
} from 'react-router-dom';
import AuthenticationRoute from './components/authenticationRoute/authenticationRoute';
import Layout from './components/Layout/layout';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Switch>
        <AuthenticationRoute path='/' component={Layout} />
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
