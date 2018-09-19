import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {Route} from 'react-router';

import createHistory from 'history/createBrowserHistory';
import {ConnectedRouter, routerMiddleware} from 'react-router-redux';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';

import Layout from './containers/site/index';
import reducers from './reducers';

import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import logger from 'redux-logger';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
const client = axios.create({
  responseType: 'json',
});

const history = createHistory();

const middleware = routerMiddleware(history);

const store = createStore(
  reducers,
  applyMiddleware(
    middleware,
    axiosMiddleware(client),
    logger,
  )
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
