import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ThankYou from "./ThankYou";
import Form from "./Form";

import Home from '../pages/Landing'
import Footer from './Footer'

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/form/:id" component={Form} />
      <Route exact path="/thanks" component={ThankYou} />
      <Route exact path="/test" component={Footer} />
    </Router>
  );
}

export default App;
