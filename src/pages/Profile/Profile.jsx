import React, { useState } from 'react';
import { useEffect } from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import EditName from '../../components/EditName/EditName';
import AccountUser from '../../components/AccountUser/AccountUser';

import serviceApi from '../../services/serviceAPI';

export default function Profile() {
  const [showEditName, setShowEditName] = useState(false);
  const handleClick = () => {
    setShowEditName(true);
  };

  const accountTitle = 'Argent Bank Savings (x6712)';
  const accountAmount = '$10,928.42';
  const accountAmountDescription = 'Available Balance';

  const fetchData = async () => {
    try {
      const responseProfile = await serviceApi.modifyProfile();
      console.log('responseProfile', responseProfile);
    } catch (error) {
      // alert('Une erreur est survenue lors du chargement des données.');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
