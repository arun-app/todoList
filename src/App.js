import React, { Component } from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <div>
          <BrowserRouter>
          <Switch>
            <Route path="/" component={Home}></Route>
          </Switch>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
