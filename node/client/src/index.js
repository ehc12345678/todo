import React from 'react';
import ReactDOM from 'react-dom';
import './views/css/styles.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

// Store
import store from './store/index';

// Views
import { App, TodoLists } from './views/Components/index';
import { Home } from './views/Containers/index';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App>
        <Route exact path='/' component={Home}/>
        <Route exact path='/todo-lists' component={TodoLists}/>
      </App>
    </Router>
  </Provider>
  , document.getElementById('root'));

// registerServiceWorker(); // eslint-disable-line no-undef
