import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './scss/main.scss';
import './tailwind.output.css';
// import './assets/css/tailwind.css';

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
        <h1 className="temp">Hello World</h1>
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
