import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './MAIN.scss';

import Randomizer from './Components/randomizer';
import Loader from './Components/loader';

function App() {
  return (
    <div className="App">
      <Router>
          <Route component={Loader} exact path="/"/>
          <Route component={Randomizer} exact path="/randomizer"/>
      </Router>
    </div>
  );
}

export default App;
