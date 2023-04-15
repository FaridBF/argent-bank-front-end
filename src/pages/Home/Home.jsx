import React from 'react';

import Footer from '../../components/Footer/Footer';
import '../Home/home.css';

import iconSecurity from '../../images/icon-security.png';
import argentBankLogo from '../../images/argentBankLogo.png';
import iconChat from '../../images/icon-chat.png';
import iconMoney from '../../images/icon-money.png';

export default function Home() {
  return (
    <div>
      <nav className='main-nav'>
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
      </nav>
      <main>
        <div className='hero'>
          <section className='hero-content'>
            <h2 className='sr-only'>Promoted Content</h2>
            <p className='subtitle'>No fees.</p>
            <p className='subtitle'>No minimum deposit.</p>
            <p className='subtitle'>High interest rates.</p>
            <p className='text'>
              Open a savings account with Argent Bank today!
            </p>
          </section>
        </div>
        <section className='features'>
          <h2 className='sr-only'>Features</h2>
          <div className='feature-item'>
            <img alt='Chat Icon' className='feature-icon' src={iconChat} />

            <h3 className='feature-item-title'>You are our #1 priority</h3>
            <p>
              Need to talk to a representative? You can get in touch through our
              24/7 chat or through a phone call in less than 5 minutes.
            </p>
          </div>
          <div className='feature-item'>
            <img alt='Chat Icon' className='feature-icon' src={iconMoney} />
            <h3 className='feature-item-title'>
              More savings means higher rates
            </h3>
            <p>
              The more you save with us, the higher your interest rate will be!
            </p>
          </div>
          <div className='feature-item'>
            <img alt='Chat Icon' className='feature-icon' src={iconSecurity} />

            <h3 className='feature-item-title'>Security you can trust</h3>
            <p>
              We use top of the line encryption to make sure your data and money
              is always safe.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
