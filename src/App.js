import React from 'react';
import './App.scss';
import {
  AboutPage,
  HomePage,
  ProjectsPage
} from 'pages/pages'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about">
          <AboutPage/>
        </Route>
        <Route path="/projects">
          <ProjectsPage/>
        </Route>
        <Route path="/">
          <HomePage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
