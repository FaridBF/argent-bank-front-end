import React from 'react';

import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import signUpMiddleware from '../../redux/middleware/signUpMiddleware';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import '../SignUp/signup.css';

export default function SignUp() {
  const dispatch = useDispatch();

  const onSubmit = async (formDataSignUp) => {
    try {
      dispatch(signUpMiddleware(formDataSignUp));
    } catch (error) {
      console.log(error);
    }
  };

  const { register, handleSubmit } = useForm();

  return (
    <div>
      <Header />
      <main className='main bg-dark-signup'>
        <section className='login-content'>
          <i className='fa fa-user-circle login-icon'></i>
          <h1>Sign up</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='input-wrapper'>
              <label htmlFor='email'>Email</label>
              <input
                {...register('email')}
                type='text'
                id='email'
                placeholder='thierry@gmail.com'
              />
            </div>
            <div className='input-wrapper'>
              <label htmlFor='password'>Password</label>
              <input {...register('password')} type='password' id='password' />
            </div>
            <div className='input-wrapper'>
              <label htmlFor='firstName'>Firstname</label>
              <input
                {...register('firstName')}
                type='text'
                id='firstName'
                placeholder='Firstname'
              />
            </div>
            <div className='input-wrapper'>
              <label htmlFor='lastname'>Lastname</label>
              <input
                {...register('lastname')}
                type='text'
                id='lastname'
                placeholder='Lastname'
              />
            </div>
            <input type='submit' value='Submit' className='login-button' />
            <a href='/login' className='login-button'>
              Return to home
            </a>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}
