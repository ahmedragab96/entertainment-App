import
React,
{
  Component,
} from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
class AuthenticationRoute extends Component<any> {
  render() {
    const {
        component,
      } = this.props;
      return (
        <Switch>
          <Route path={this.props.path} component={component} />
        </Switch>
      );
  }
}

export default AuthenticationRoute;
