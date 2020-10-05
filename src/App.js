import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.scss';
import Loader from './components/Loader/Loader';

const About = lazy(() => import('./containers/About/About'));
const Home = lazy(() => import('./containers/Home/Home'));
const Game = lazy(() => import('./containers/Game/Game'))

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/game">
            <Game />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Suspense>

    </Router>
  );
}

export default App;
