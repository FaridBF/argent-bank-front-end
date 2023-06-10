import {
  createBrowserRouter,
  RouterProvider,
  redirect
} from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './redux/store/redux-store';

import './styles/index.css';

import Page404 from './pages/Page404/Page404';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';
import Transactions from './pages/Transactions/Transactions';
import SignUp from './pages/SignUp/SignUp';
// import ProtectedRoute from './redux/middleware/ProtectedRouteMiddleware';
/**
 * Router is a variable that represents a browser router for the application.
 * The router is created using the `BrowserRouter` function from the `react-router-dom` library.
 * The JS element consists of a root `Route` element with several nested `Route` elements.
 * Each nested `Route` element defines a different route for the application, with a corresponding path and element to render.
 * The `App` component is used as the root element for all routes, and the other elements are used to render the various pages of the application.
 * @type {Router}
 */

const routes = createBrowserRouter([
  { errorElement: <Page404 /> },
  { path: '/', element: <Home /> },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
  { path: '/profile', element: <Profile /> },
  { path: '/transactions', element: <Transactions /> }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);
