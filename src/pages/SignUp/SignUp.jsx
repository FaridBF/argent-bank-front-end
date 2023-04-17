import React from 'react';
import { useEffect } from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import serviceApi from '../../services/serviceAPI';

import '../SignUp/signup.css';

export default function SignUp() {
  const fetchData = async () => {
    try {
      const responseSignUp = await serviceApi.signup();
      console.log('responseSignUp', responseSignUp);
    } catch (error) {
      alert('Une erreur est survenue lors du chargement des données.');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <Header />
      <main className='main bg-dark'>
        <section className='login-content'>
          <i className='fa fa-user-circle login-icon'></i>
          <h1>Sign up</h1>
          <form>
            <div className='input-wrapper'>
              <label htmlFor='email'>Email</label>
              <input type='text' id='email' />
            </div>
            <div className='input-wrapper'>
              <label htmlFor='password'>Password</label>
              <input type='password' id='password' />
            </div>
            <div className='input-wrapper'>
              <label htmlFor='firstName'>FirstName</label>
              <input type='text' id='firstName' />
            </div>
            <div className='input-wrapper'>
              <label htmlFor='lastname'>LastName</label>
              <input type='text' id='lastname' />
            </div>
            <button className='login-button'>Validate</button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}
