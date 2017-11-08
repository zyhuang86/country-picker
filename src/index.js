import React from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers'
import { render } from 'react-dom';
import App from './containers/App';
import '../node_modules/font-awesome/css/font-awesome.min.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/openlayers/css/ol.css'
import '../node_modules/world-flags-sprite/stylesheets/flags32.css'
import './styles/Map.css'
import './styles/App.css'

const middleware = [ thunk ];

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

