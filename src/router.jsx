import {
  createBrowserRouter,
  RouterProvider,
  redirect
} from 'react-router-dom';
import { useSelector } from 'react-redux';

import Page404 from './pages/Page404/Page404';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';
import Transactions from './pages/Transactions/Transactions';
import SignUp from './pages/SignUp/SignUp';
// import Swagger from './swagger/Swagger';
import App from './App';

import '../src/styles/index.css';

/**
 * Custom router component for handling routing in the application.
 * @returns {JSX.Element} The router component.
 */
const Router = () => {
  const isUserConnected = useSelector((state) => state.user.isConnected);

  /**
   * Function to check if the user can load a protected route.
   * If the user is connected, the route can be loaded.
   * Otherwise, it redirects to the login page.
   * @param {boolean} isUserConnected - Indicates if the user is connected.
   * @returns {boolean|JSX.Element} Returns `true` if the user is connected, or a redirect element to the login page.
   */
  function canLoad(isUserConnected) {
    return () => {
      if (isUserConnected) {
        return true;
      } else {
        return redirect('/login');
      }
    };
  }

  const routes = createBrowserRouter([
    { errorElement: <Page404 /> },
    { path: '/', element: <Home /> },
    { path: '/login', element: <Login /> },
    { path: '/signup', element: <SignUp /> },
    {
      path: '/profile',
      loader: canLoad(isUserConnected),
      element: <Profile />
    },
    { path: '/transactions', element: <Transactions /> }
    // { path: '/swagger', element: <Swagger /> }
  ]);
  return (
    <RouterProvider router={routes}>
      <App />
    </RouterProvider>
  );
};

export default Router;
