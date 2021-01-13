import Navbar from '../../components/navbar';
import SubNavbar from '../../components/sub-navbar';
import RegistrationPage from '../registration-page';
import { Switch, Route } from "react-router-dom";
import './main.css';
import Dashboard from '../dashboard';


function Main() {
  return (
    <>
     
      <Switch>
        <Route
          exact path="/"
          render={props => (<RegistrationPage />)}
        />
        <Route
          path="/dash"
          render={props => (<Dashboard />)}
        />
      </Switch></>
  );
}

export default Main;
