import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import userProfileMiddleware from '../../redux/middleware/userProfileMiddleware';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import EditName from '../../components/EditName/EditName';
import AccountUser from '../../components/AccountUser/AccountUser';

export default function Profile() {
  const dispatch = useDispatch();
  const selectedToken = useSelector((state) => state.user.token);

  const firstName = useSelector((state) => state.user.firstName);
  const lastName = useSelector((state) => state.user.lastName);

  const [showEditName, setShowEditName] = useState(false);
  const handleClick = () => {
    setShowEditName(true);
  };

  const fetchData = () => {
    try {
      dispatch(userProfileMiddleware(selectedToken));
      // console.log('token dans profile', selectedToken);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (selectedToken) {
      // console.log('selectedToken ds useeffect:', selectedToken);
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
            {firstName} {lastName}
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
          accountTitle={'Argent Bank Checking (x8349)'}
          accountAmount={'2520.34'}
          accountAmountDescription={'Available Balance'}
        />
        <AccountUser
          accountTitle={'Argent Bank Savings (x6712)'}
          accountAmount={'14296.42'}
          accountAmountDescription={'Available Balance'}
        />
        <AccountUser
          accountTitle={'Argent Bank CreditCard (x8349)'}
          accountAmount={'224.35'}
          accountAmountDescription={'Available Balance'}
        />
      </main>
      <Footer />
    </div>
  );
}
