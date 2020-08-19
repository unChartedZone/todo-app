import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';

// Views
import Todos from './views/Todos.js';
import Dev from './views/Dev.js';
import About from './views/About.js';

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Todos} />

          <Route path="/about" component={About} />

          <Route path="/dev" component={Dev} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
