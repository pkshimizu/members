import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {Route} from 'react-router';

import createHistory from 'history/createBrowserHistory';
import {ConnectedRouter, routerMiddleware, routerReducer} from "react-router-redux";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {Provider} from 'react-redux';

import Layout from './components/site/index';
import reducers from './reducers';

const history = createHistory();

const middleware = routerMiddleware(history);

const store = createStore(
  reducers,
  applyMiddleware(middleware)
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route path="/" component={Layout} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
