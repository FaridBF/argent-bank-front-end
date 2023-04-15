import React, { useState } from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import EditName from '../../components/EditName/EditName';
import AccountUser from '../../components/AccountUser/AccountUser';

export default function User() {
  const [showEditName, setShowEditName] = useState(false);

  const handleClick = () => {
    setShowEditName(true);
  };

  const accountTitle = 'Argent Bank Savings (x6712)';
  const accountAmount = '$10,928.42';
  const accountAmountDescription = 'Available Balance';

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
        <AccountUser
          accountTitle={accountTitle}
          accountAmount={accountAmount}
          accountAmountDescription={accountAmountDescription}
        />
        <AccountUser
          accountTitle={accountTitle}
          accountAmount={accountAmount}
          accountAmountDescription={accountAmountDescription}
        />
        <AccountUser
          accountTitle={accountTitle}
          accountAmount={accountAmount}
          accountAmountDescription={accountAmountDescription}
        />
      </main>
      <Footer />
    </div>
  );
}
