import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import userProfileMiddleware from '../../redux/middleware/userProfileMiddleware';
import { getUserProfile } from '../../redux/store/userStore';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import EditName from '../../components/EditName/EditName';
import AccountUser from '../../components/AccountUser/AccountUser';

export default function Profile() {
  // const dispatch = useDispatch();
  const selectedToken = useSelector((state) => state.user.token);
  console.log('selectedToken', selectedToken);

  const [showEditName, setShowEditName] = useState(false);
  const handleClick = () => {
    setShowEditName(true);
  };

  const accountTitle = 'Argent Bank Savings (x6712)';
  const accountAmount = '$10,928.42';
  const accountAmountDescription = 'Available Balance';

  const fetchData = () => {
    // console.log('token dans profile', token);

    try {
      getUserProfile(selectedToken);
      // dispatch(userProfileMiddleware(selectedToken));
      console.log('token dans profile', selectedToken);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (selectedToken) {
      console.log('selectedToken ds useeffect:', selectedToken);
      fetchData();
    }
  }, [selectedToken]);

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
