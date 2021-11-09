import React, { Component } from "react";
import { Switch, Route, BrowserRouter,HashRouter } from "react-router-dom";
import "./App.css";
import Registration from './Components/Sign_in/registration';



class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <HashRouter>
            <Switch>
              <Route component={Registration} path="/" exact={true} />
              {/* Contractor Dashbaord */}
            </Switch>
          </HashRouter>
        </div>
      </div>
    );
  }
}

export default App;
