import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router';
import { createHistory } from 'history';
import routes from './routes';
import ContactsApp from './components/ContactsApp';

let handleCreateElement = (Component, props) => {
  if (Component.hasOwnProperty('requestInitialData')) {
    let initialData = document.getElementById('initial-data').textContent;
    if (initialData.length > 0) {
      initialData = JSON.parse(initialData);
    }

    return <Component initialData={initialData} {...props} />;
  } else {
    return <Component {...props} />;
  }
}

// let initialData = document.getElementById('initial-data').textContent;

// if (initialData.length > 0) {
  // initialData = JSON.parse(initialData);
// }

render((
  <Router history={createHistory()} createElement={handleCreateElement}>{routes}</Router>
), document.getElementById('root'));
