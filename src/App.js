import React, { lazy, Suspense } from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.scss';
import Loader from './components/Loader/Loader';

const About = lazy(() => import('./containers/About/About'));
const Home = lazy(() => import('./containers/Home/Home'));
const Game = lazy(() => import('./containers/Game/Game'))
const SignIn = lazy(() => import('./containers/SignIn/SignIn'))
const SignUp = lazy(() => import('./containers/SignUp/SignUp'))
const Profile = lazy(() => import('./containers/Profile/Profile'));

function App() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="main">
      {isLoading && <Loader />}
      <Router>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path="/signin">
              <SignIn setLoaderVisibility={value => setIsLoading(value)} />
            </Route>
            <Route exact path="/signup">
              <SignUp />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
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
    </div>
  );
}

export default App;
