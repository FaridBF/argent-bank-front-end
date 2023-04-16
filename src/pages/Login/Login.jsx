import React from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

export default function Login() {
  return (
    <div>
      <Header />
      <main class='main bg-dark'>
        <section class='login-content'>
          <i class='fa fa-user-circle login-icon'></i>
          <h1>Sign In</h1>
          <form>
            <div class='input-wrapper'>
              <label for='username'>Username</label>
              <input type='text' id='username' />
            </div>
            <div class='input-wrapper'>
              <label for='password'>Password</label>
              <input type='password' id='password' />
            </div>
            <div class='input-remember'>
              <input type='checkbox' id='remember-me' />
              <label for='remember-me'>Remember me</label>
            </div>
            <a href='/profile' class='login-button'>
              Sign In
            </a>
            <button class='login-button'>Sign In</button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}
