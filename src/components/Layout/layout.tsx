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
import Navbar from '../navbar/navbar';
import Movies from '../../screens/movies/movies';
class Layout extends Component {
  render() {
    return (
      <div>
        <div>
          <Navbar />
        </div>
        <Switch>
          <Route exact={true} component={Home}    path = '/' />
          <Route exact={true} component={Home}    path = '/home' />
          <Route exact={true} component={Movies}  path = '/movies' />
        </Switch>
      </div>
    );
  }
}

export default Layout;
