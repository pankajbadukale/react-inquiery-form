import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import uuid from 'uuid';

import appStore from './app.store';
import FormWrapper from "./components/FormWrapper";
import ListEnquiry  from './components/ListEnquiry';
import FormSubmitted from './components/FormSubmitted';
import "./App.css";

const App = (props) => {
    let appRoutes = [{
      route: '/',
      type: 'exact',
      component: FormWrapper
    },
    {
      route: '/thanks',
      component: FormSubmitted,
    },
    {
      route: '/list',
      component: ListEnquiry
    }
    ].map(route => {
      let key = uuid();
      return route.type === 'exact' ? (<Route key={key} exact path={route.route} component={route.component} />) : (<Route key={key} path={route.route} component={route.component} />);
    });
    return (
      <Provider store={appStore}>
      <Router>
        <div className="container-fluid">
          <header className="App-header">
          <Switch>
          {appRoutes}    
          </Switch>
          </header>
        </div>
      </Router>
      </Provider>
    );
}

export default App;
