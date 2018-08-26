import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {Route} from 'react-router';

import createHistory from 'history/createBrowserHistory';
import {Link} from 'react-router-dom';
import {ConnectedRouter, routerMiddleware, routerReducer} from "react-router-redux";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {Provider} from 'react-redux';

import {pure} from 'recompose';

const history = createHistory();

const middleware = routerMiddleware(history);

const store = createStore(
  combineReducers({
    router: routerReducer
  }),
  applyMiddleware(middleware)
);

const Home = pure(() => (
  <div>
    <h1>Home Page</h1>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/a">Page A</Link></li>
      <li><Link to="/b">Page B</Link></li>
    </ul>
  </div>
));

const PageA = pure(() => (
  <div>
    <h1>Page A</h1>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/a">Page A</Link></li>
      <li><Link to="/b">Page B</Link></li>
    </ul>
  </div>
));

const PageB = pure(() => (
  <div>
    <h1>Page B</h1>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/a">Page A</Link></li>
      <li><Link to="/b">Page B</Link></li>
    </ul>
  </div>
));

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/a" component={PageA} />
        <Route path="/b" component={PageB} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
