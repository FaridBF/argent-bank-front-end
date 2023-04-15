import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import EditName from '../../components/EditName/EditName';

export default function User() {
  const [showEditName, setShowEditName] = useState(false);

  const handleClick = () => {
    setShowEditName(true);
  };

  return (
    <div>
      <Header />
      <main className='main bg-dark'>
        <div className='header'>
          <h1>
            Welcome back
            <br />
            Tony Jarvis!
          </h1>
          <div>
            <button className='edit-button' onClick={handleClick}>
              Edit Name
            </button>
            {showEditName && <EditName />}
          </div>
        </div>
        <h2 className='sr-only'>Accounts</h2>
        <section className='account'>
          <div className='account-content-wrapper'>
            <h3 className='account-title'>Argent Bank Checking (x8349)</h3>
            <p className='account-amount'>$2,082.79</p>
            <p className='account-amount-description'>Available Balance</p>
          </div>
          <div className='account-content-wrapper cta'>
            <Link to='/transactions'>
              <button className='transaction-button'>View transactions</button>
            </Link>
          </div>
        </section>
        <section className='account'>
          <div className='account-content-wrapper'>
            <h3 className='account-title'>Argent Bank Savings (x6712)</h3>
            <p className='account-amount'>$10,928.42</p>
            <p className='account-amount-description'>Available Balance</p>
          </div>
          <div className='account-content-wrapper cta'>
            <Link to='/transactions'>
              <button className='transaction-button'>View transactions</button>
            </Link>{' '}
          </div>
        </section>
        <section className='account'>
          <div className='account-content-wrapper'>
            <h3 className='account-title'>Argent Bank Credit Card (x8349)</h3>
            <p className='account-amount'>$184.30</p>
            <p className='account-amount-description'>Current Balance</p>
          </div>
          <div className='account-content-wrapper cta'>
            <Link to='/transactions'>
              <button className='transaction-button'>View transactions</button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
