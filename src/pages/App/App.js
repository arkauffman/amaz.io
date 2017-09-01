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

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <NavBar />
        </Router>

        <Router>
          <Switch>
            <Route exact path='/' render={() => 
              <Home />
            }/>
            <Route exact path='/catalogue' render={() => 
              <CataloguePage />
            }/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
