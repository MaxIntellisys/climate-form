import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import ThankYou from "./ThankYou";
import Form from "./Form";
import FileUploader from "./FileUploader";

function App() {
 
  return (
    <Router>
      <Redirect from='/' to='/climate-form' />
      <Route exact path="/climate-form" component={FileUploader} />
      <Route exact path="/climate-form/form/:id" component={Form} />
      <Route exact path="/climate-form/thanks" component={ThankYou} />
    </Router>
  );
}

export default App;
