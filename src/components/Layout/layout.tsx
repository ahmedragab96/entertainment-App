import
React,
{
  Component,
} from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import Home from '../../screens/home/home';
class AuthenticationRoute extends Component {
  render() {
      return (
        <Switch>
          <Route component = {Home} path = '/home' />
        </Switch>
      );
  }
}

export default AuthenticationRoute;
