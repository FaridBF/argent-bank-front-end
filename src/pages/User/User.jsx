import React from 'react';
import argentBankLogo from '../../images/argentBankLogo.png';
import Footer from '../../components/Footer/Footer';

export default function User() {
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
          <a class='main-nav-item' href='/user'>
            <i class='fa fa-user-circle'></i>
            Tony
          </a>
          <a class='main-nav-item' href='/'>
            <i class='fa fa-sign-out'></i>
            Sign Out
          </a>
        </div>
      </nav>
      <main class='main bg-dark'>
        <div class='header'>
          <h1>
            Welcome back
            <br />
            Tony Jarvis!
          </h1>
          <button class='edit-button'>Edit Name</button>
        </div>
        <h2 class='sr-only'>Accounts</h2>
        <section class='account'>
          <div class='account-content-wrapper'>
            <h3 class='account-title'>Argent Bank Checking (x8349)</h3>
            <p class='account-amount'>$2,082.79</p>
            <p class='account-amount-description'>Available Balance</p>
          </div>
          <div class='account-content-wrapper cta'>
            <button class='transaction-button'>View transactions</button>
          </div>
        </section>
        <section class='account'>
          <div class='account-content-wrapper'>
            <h3 class='account-title'>Argent Bank Savings (x6712)</h3>
            <p class='account-amount'>$10,928.42</p>
            <p class='account-amount-description'>Available Balance</p>
          </div>
          <div class='account-content-wrapper cta'>
            <button class='transaction-button'>View transactions</button>
          </div>
        </section>
        <section class='account'>
          <div class='account-content-wrapper'>
            <h3 class='account-title'>Argent Bank Credit Card (x8349)</h3>
            <p class='account-amount'>$184.30</p>
            <p class='account-amount-description'>Current Balance</p>
          </div>
          <div class='account-content-wrapper cta'>
            <button class='transaction-button'>View transactions</button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
