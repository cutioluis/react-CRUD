import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../container/Home";
import Todo from "../container/Todo";

import Layout from "../layout/Layout";

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
        <Route path="/todo">
            <Todo />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
