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
  const procedures = [
    'deep cleaning',
    'nitrous oxide infusions',
    'root canals',
    'crowns',
    'implants'
  ]
  return (
    <Router>
      <div className="App">
        <nav>
        {/* React removes whitespace when it compiles, hence {' '} */}
          <Link to='/'>Home</Link>{' '}
          <Link to='/procedures'>Procedures </Link>{' '}
          <Link to='/contact'>Contact us</Link>{' '}
        </nav>
      {/* each of these components need to have its own route */}
        {/* use the exact keyword so that every page with a / in the url wont show home component */}
        <Route exact path='/' component={Home} />
        <Route path='/procedures' render={ ()=> <Procedures procedures={procedures}/> } />
        <Route path='/contact' component={Contact} />
      </div>
    </Router>
  );
}

export default App;
