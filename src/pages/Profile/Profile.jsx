import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import userProfileMiddleware from '../../redux/middleware/userProfileMiddleware';
import editUserProfileMiddleware from '../../redux/middleware/editUserProfileMiddleware';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import AccountUser from '../../components/AccountUser/AccountUser';

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
    setShowEditName(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDatas = {
      firstName,
      lastName
    };
    dispatch(editUserProfileMiddleware(selectedToken, formDatas));

    // console.log('submit', handleSubmit);
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
                    placeholder='Tony'
                    type='text'
                    name='firstName'
                  />
                  <input
                    id='lastName'
                    value={lastName}
                    onChange={handleLastName}
                    placeholder='Jarvis'
                    type='text'
                    name='lastName'
                  />
                </div>
                <div className='bottom-container-editName'>
                  <button onClick={handleSubmit}>Save</button>
                  <button>Cancel</button>
                </div>
              </div>
            )}
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
