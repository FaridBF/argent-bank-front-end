import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from '../src/redux/store';

import Page404 from './pages/Page404/Page404';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';
import Transactions from './pages/Transactions/Transactions';
import SignUp from './pages/SignUp/SignUp';
/**
 * Router is a variable that represents a browser router for the application.
 * The router is created using the `BrowserRouter` function from the `react-router-dom` library.
 * The JS element consists of a root `Route` element with several nested `Route` elements.
 * Each nested `Route` element defines a different route for the application, with a corresponding path and element to render.
 * The `App` component is used as the root element for all routes, and the other elements are used to render the various pages of the application.
 * @type {Router}
 */

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/transactions' element={<Transactions />} />
            <Route path='*' element={<Page404 />} />
            <Route path='/error' element={<Page404 />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
