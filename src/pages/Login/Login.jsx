import React from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

export default function Login() {
  return (
    <div>
      <Header />
      <main className='main bg-dark'>
        <section className='login-content'>
          <i className='fa fa-user-circle login-icon'></i>
          <h1>Sign In</h1>
          <form>
            <div className='input-wrapper'>
              <label htmlFor='username'>Username</label>
              <input type='text' id='username' />
            </div>
            <div className='input-wrapper'>
              <label htmlFor='password'>Password</label>
              <input type='password' id='password' />
            </div>
            <div className='input-remember'>
              <input type='checkbox' id='remember-me' />
              <label htmlFor='remember-me'>Remember me</label>
            </div>
            <a href='/profile' className='login-button'>
              Sign In
            </a>
            <button className='login-button'>Sign In</button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}
