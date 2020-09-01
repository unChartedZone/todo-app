import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';

// Views
import Todos from './views/Todos.js';
import Dev from './views/Dev.js';
import About from './views/About.js';

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Redirect to="/todos" />
        </Route>
        <Route exact path="/todos/:collectionId?" children={<Todos />} />
        <Route exact path="/about" component={About} />
        <Route exact path="/dev" component={Dev} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
