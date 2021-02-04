import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header';
import { GlobalStyles } from './globalstyles';
import SignUp from './components/SignUp';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Route exact path="/" component={Header} />
      <Route path="/Signup" component={SignUp} />
  </Router>
  );
}

export default App;
