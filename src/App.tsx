import React from 'react';
import './App.css';
import {
  Switch,
  BrowserRouter,
} from 'react-router-dom';
import AuthenticationRoute from './components/authenticationRoute/authenticationRoute';
import Home from './screens/home/home';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Switch>
        <AuthenticationRoute path='/' component={Home} />
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
