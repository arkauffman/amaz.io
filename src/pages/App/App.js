import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import './App.css';
import NavBar from './../../components/NavBar/NavBar';
import Home from './../Home/Home';
import CataloguePage from './../CataloguePage/CataloguePage';
import CheckoutPage from './../CheckoutPage/CheckoutPage';
import ConfirmationPage from './../ConfirmationPage/ConfirmationPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <NavBar />
            <Switch>
              <Route exact path='/' render={() => 
                <Home />
              }/>
              <Route exact path='/catalogue' render={() => 
                <CataloguePage />
              }/>
              <Route exact path='/checkout' render={() => 
                <CheckoutPage />
              }/>
              <Route exact path='/confirmation' render={() => 
                <ConfirmationPage />
              }/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
