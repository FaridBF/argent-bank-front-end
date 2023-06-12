import { StrictMode } from 'react';

import * as ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  redirect
} from 'react-router-dom';
import { useSelector } from 'react-redux';

import '../src/styles/index.css';

import Page404 from './pages/Page404/Page404';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';
import Transactions from './pages/Transactions/Transactions';
import SignUp from './pages/SignUp/SignUp';
import App from './App';

const Router = () => {
  // const isUserConnected = via selector récupérer isConnected
  const isUserConnected = useSelector((state) => state.user.isConnected);

  function canLoad(isUserConnected) {
    console.log('isUserConnected', isUserConnected);
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
  ]);
  return (
    <RouterProvider router={routes}>
      <App />
    </RouterProvider>
  );
};

export default Router;
