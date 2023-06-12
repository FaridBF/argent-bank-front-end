import React, { useEffect } from 'react';

import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import logInMiddleware from '../../redux/middleware/logInMiddleware';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (formDataSignIn) => {
    dispatch(logInMiddleware(formDataSignIn));
  };

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  // Obtenez l'état de connexion depuis Redux
  const isConnected = useSelector((state) => state.user.isConnected);

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
