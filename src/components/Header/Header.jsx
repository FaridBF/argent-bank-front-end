import React from 'react';
import { useLocation } from 'react-router-dom';
import argentBankLogo from '../../assets/logo/argentBankLogo.png';

export default function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isUserPage = location.pathname === '/user';
  const isSignInPage = location.pathname === '/sign-in';
  const isTransactionsPage = location.pathname === '/transactions';

  return (
    <header>
      <nav className='main-nav'>
        {isHomePage || isSignInPage ? (
          <>
            <a className='main-nav-logo' href='/'>
              <img
                className='main-nav-logo-image'
                alt='Argent Bank Logo'
                src={argentBankLogo}
              />
              <h1 className='sr-only'>Argent Bank</h1>
            </a>
            <div>
              <a className='main-nav-item' href='/sign-in'>
                <i className='fa fa-user-circle'></i>
                Sign In
              </a>
            </div>
          </>
        ) : null}
        {isUserPage || isTransactionsPage ? (
          <>
            <a className='main-nav-logo' href='/'>
              <img
                className='main-nav-logo-image'
                alt='Argent Bank Logo'
                src={argentBankLogo}
              />
              <h1 className='sr-only'>Argent Bank</h1>
            </a>
            <div>
              <a className='main-nav-item' href='/user'>
                <i className='fa fa-user-circle'></i>
                Tony
              </a>
              <a className='main-nav-item' href='/'>
                <i className='fa fa-sign-out'></i>
                Sign Out
              </a>
            </div>
          </>
        ) : null}
      </nav>
    </header>
  );
}
