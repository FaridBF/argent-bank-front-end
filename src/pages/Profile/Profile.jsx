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

/**
 * Profile component.
 * Renders the user profile page with the ability to edit the user's name and displays the user's accounts.
 * @returns {JSX.Element} Profile component.
 */
export default function Profile() {
  const dispatch = useDispatch();
  const selectedToken = useSelector((state) => state.user.token);
  const getfirstName = useSelector((state) => state.user.firstName);
  const getlastName = useSelector((state) => state.user.lastName);

  const [showEditName, setShowEditName] = useState(false);
  const [firstName, setFisrtName] = useState('');
  const [lastName, setLastName] = useState('');

  /**
   * Event handler for first name input.
   * Updates the first name state based on the input value.
   * @param {Object} e - Event object
   */

  const handleFirstName = (e) => {
    setFisrtName(e.target.value);
  };

  /**
   * Event handler for last name input.
   * Updates the last name state based on the input value.
   * @param {Object} e - Event object
   */
  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  /**
   * Event handler for the edit button.
   * Toggles the visibility of the name edit section.
   */
  const handleClick = () => {
    if (showEditName) {
      setShowEditName(false);
    } else {
      setShowEditName(true);
    }
  };

  /**
   * Event handler for the submit button in the name edit section.
   * Dispatches the editUserProfileMiddleware to update the user's profile with the edited name.
   * @param {Object} e - Event object
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDatas = {
      firstName,
      lastName
    };
    dispatch(editUserProfileMiddleware(selectedToken, formDatas));
    setShowEditName(false);
  };

  /**
   * Event handler for the reset button in the name edit section.
   * Resets the first name and last name states to their initial values.
   * @param {Object} e - Event object
   */
  const handleReset = async (e) => {
    setFisrtName('');
    setLastName('');
  };

  /**
   * Fetches user profile data using the userProfileMiddleware.
   */
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
