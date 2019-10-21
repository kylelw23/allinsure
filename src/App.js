import React from 'react';
import './App.css';
import './Ultil.css';
import './vendor/bootstrap/css/bootstrap.min.css';
import './vendor/animate/animate.css';
import './fonts/font-awesome-4.7.0/css/font-awesome.min.css';
import './fonts/iconic/css/material-design-iconic-font.min.css';
import './vendor/css-hamburgers/hamburgers.min.css';
import './vendor/animsition/css/animsition.min.css';
import './vendor/select2/select2.min.css';
import './vendor/daterangepicker/daterangepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './pages/LandingPage';
import AdminLogin from './pages/AdminLogin';
import AdminHomePage from './pages/AdminHomePage';
import Register from './pages/Register';
import UserLogin from './pages/UserLogin';
import AdminRequestPage from './pages/AdminRequestPage';
import ClaimDetail from './pages/ClaimDetail'
import UserHomePage from './pages/UserHomePage';
import MakeClaim from './pages/MakeClaim'
import NoMatch from './pages/Error';
import {Route, Switch} from 'react-router-dom';

//Redux

function App() {
  return (
    <React.Fragment>
        <Switch>
          <Route exact path="/" component={LandingPage}/>
          <Route exact path="/admin-login" component={AdminLogin}/>
          <Route exact path="/admin-login/admin-home-page" component={AdminHomePage}/>
          <Route exact path="/admin-login/admin-request" component={AdminRequestPage}/>
          <Route exact path="/admin-login/admin-request/:id" component={ClaimDetail}/>
          <Route exact path="/User-Login" component={UserLogin}/>
          <Route exact path="/Register" component={Register}/>
          <Route exact path='/User-Login/UserHomePage' component={UserHomePage}/>
          <Route exact path="/User-Login/UserHomePage/MakeClaim" component={MakeClaim}/>
          <Route component={NoMatch}/>
        </Switch>
    </React.Fragment>
  );
}

export default App;
