import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import userProfileMiddleware from '../../redux/middleware/userProfileMiddleware';
import editUserProfileMiddleware from '../../redux/middleware/editUserProfileMiddleware';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import AccountUser from '../../components/AccountUser/AccountUser';

import './profile.css';

export default function Profile() {
  const dispatch = useDispatch();
  const selectedToken = useSelector((state) => state.user.token);

  const getfirstName = useSelector((state) => state.user.firstName);
  const getlastName = useSelector((state) => state.user.lastName);

  const [showEditName, setShowEditName] = useState(false);
  const [firstName, setFisrtName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleFirstName = (e) => {
    setFisrtName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleClick = () => {
    if (showEditName) {
      setShowEditName(false);
    } else {
      setShowEditName(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDatas = {
      firstName,
      lastName
    };
    dispatch(editUserProfileMiddleware(selectedToken, formDatas));
    setShowEditName(false);
  };

  const handleReset = async (e) => {
    setFisrtName('');
    setLastName('');
  };

  const fetchData = () => {
    try {
      dispatch(userProfileMiddleware(selectedToken));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (selectedToken) {
      fetchData();
    }
  }, [selectedToken]);

  return (
    <div>
      <Header />
      <main className='main bg-dark-transactions'>
        <div className='header'>
          <h1 className='title-profile'>
            Welcome back
            <br />
            {getfirstName} {getlastName}
          </h1>
          <div>
            <button className='edit-button' onClick={handleClick}>
              Edit Name
            </button>
            {showEditName && (
              <div className='container-editName'>
                <div className='top-container-editName'>
                  <input
                    id='firstName'
                    value={firstName}
                    onChange={handleFirstName}
                    placeholder={getfirstName}
                    type='text'
                    name='firstName'
                  />
                  <input
                    id='lastName'
                    value={lastName}
                    onChange={handleLastName}
                    placeholder={getlastName}
                    type='text'
                    name='lastName'
                  />
                </div>
                <div className='bottom-container-editName'>
                  <button className='button-save' onClick={handleSubmit}>
                    Save
                  </button>
                  <button className='button-cancel' onClick={handleReset}>
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <h2 className='sr-only'>Accounts</h2>
        <AccountUser
          accountTitle={'Argent Bank Checking (x8349)'}
          accountAmount={'$2520.34'}
          accountAmountDescription={'Available Balance'}
        />
        <AccountUser
          accountTitle={'Argent Bank Savings (x6712)'}
          accountAmount={'$14296.42'}
          accountAmountDescription={'Available Balance'}
        />
        <AccountUser
          accountTitle={'Argent Bank CreditCard (x8349)'}
          accountAmount={'$224.35'}
          accountAmountDescription={'Available Balance'}
        />
      </main>
      <Footer />
    </div>
  );
}
