import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, useLocation } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Home from '../components/pages/home/index.js';
import Innerpage from '../components/pages/innerpage/index.js';
import Login from '../components/pages/login/index.js';
import NotFound from '../components/pages/notfound/index.js';


export const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL
});

function MainRoute() {
  const location = useLocation();
  React.useEffect(() => {
    // console.log('Location changed');
    document.body.classList.remove('show-menu');
    if (document.getElementById("hamburger") != null) {
      document.getElementById("hamburger").classList.remove('is-active');
    }
  }, [location]);

  return (
    <Switch>
      <Route path={`${process.env.PUBLIC_URL}/`} exact component={Login} />
      <Route path={`${process.env.PUBLIC_URL}/home`} exact component={Home} />
      <Route path={`${process.env.PUBLIC_URL}/innerpage`} exact component={Innerpage} />
      <Route path="*" exact component={NotFound} />
    </Switch>
  );
}

export default MainRoute;
