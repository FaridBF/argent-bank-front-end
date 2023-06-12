import { StrictMode } from 'react';

import * as ReactDOM from 'react-dom/client';
import Router from './router';
import { Provider } from 'react-redux';
import store from './redux/store/redux-store';

import './styles/index.css';

/**
 * Router is a variable that represents a browser router for the application.
 * The router is created using the `BrowserRouter` function from the `react-router-dom` library.
 * The JS element consists of a root `Route` element with several nested `Route` elements.
 * Each nested `Route` element defines a different route for the application, with a corresponding path and element to render.
 * The `App` component is used as the root element for all routes, and the other elements are used to render the various pages of the application.
 * @type {Router}
 */

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </StrictMode>
);
