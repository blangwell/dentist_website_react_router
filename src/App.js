import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from './Home';
import Procedures from './Procedures';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <div className="App">
      {/* each of these components need to have its own route */}
        {/* use the exact keyword so that every page with a / in the url wont show home component */}
        <Route exact path='/' component={Home} />
        <Route path='/procedures' component={Procedures} />
        <Route path='/contact' component={Contact} />
      </div>
    </Router>
  );
}

export default App;
