import React from 'react';
import Footer from '../../components/Footer/Footer';
import argentBankLogo from '../../assets/logo/argentBankLogo.png';

export default function SignIn() {
  return (
    <div>
      <nav class='main-nav'>
        <a class='main-nav-logo' href='/'>
          <img
            className='main-nav-logo-image'
            alt='Argent Bank Logo'
            src={argentBankLogo}
          />
          <h1 class='sr-only'>Argent Bank</h1>
        </a>
        <div>
          <a class='main-nav-item' href='/sign-in'>
            <i class='fa fa-user-circle'></i>
            Sign In
          </a>
        </div>
      </nav>
      <main class='main bg-dark'>
        <section class='sign-in-content'>
          <i class='fa fa-user-circle sign-in-icon'></i>
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
            <a href='/user' class='sign-in-button'>
              Sign In
            </a>
            <button class='sign-in-button'>Sign In</button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}
