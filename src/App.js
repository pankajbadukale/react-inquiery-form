import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';

import appStore from './app.store';
import FormWrapper from "./components/FormWrapper";
import ListEnquiry  from './components/ListEnquiry';
import FormSubmitted from './components/FormSubmitted';
import "./App.css";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formTitle: "Enquiry Form"
    };
  }

  render() {
    return (
      <Provider store={appStore}>
      <Router>
        <div className="container-fluid">
          <header className="App-header">
            <Route exact path="/" component={FormWrapper} />
            <Route path="/thanks" component={FormSubmitted} />
            <Route path="/list" component={ListEnquiry} />
            </header>
            </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
