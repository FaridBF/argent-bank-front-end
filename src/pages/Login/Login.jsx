import React, { useEffect } from 'react';

import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import logInMiddleware from '../../redux/middleware/logInMiddleware';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

/**
 * Login component.
 * Renders the login page with a form for user login.
 * @returns {JSX.Element} Login component.
 */

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  /**
   * Form submit handler.
   * Dispatches the login middleware to log in the user.
   * @param {Object} formDataSignIn - Form data for user sign-in.
   */
  const onSubmit = (formDataSignIn) => {
    dispatch(logInMiddleware(formDataSignIn));
  };

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  // Get connection state from Redux
  const isConnected = useSelector((state) => state.user.isConnected);
  /**
   * Effect hook to navigate to the profile page if the user is connected.
   */
  useEffect(() => {
    if (isConnected) {
      navigate('/profile');
    }
  }, [isConnected, navigate]);

  return (
    <div>
      <Header />
      <main className='main bg-dark-login'>
        <section className='login-content'>
          <i className='fa fa-user-circle login-icon'></i>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='input-wrapper'>
              <label htmlFor='username'>Email</label>
              <input
                {...register('email', { required: true })}
                type='email'
                placeholder='thierry@gmail.com'
              />
              {errors.email && <p>Email is required</p>}
            </div>
            <div className='input-wrapper'>
              <label htmlFor='password'>Password</label>
              <input
                {...register('password', { required: true })}
                type='password'
              />
              {errors.password && <p>Password is required</p>}
            </div>
            <div className='input-remember'>
              <input type='checkbox' id='remember-me' />
              <label htmlFor='remember-me'>Remember me</label>
            </div>
            <input type='submit' value='Submit' className='login-button' />
            <a href='/signup' className='login-button'>
              Sign Up
            </a>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}
