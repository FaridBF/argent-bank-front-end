import React from 'react';
// import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { useDispatch } from 'react-redux';
import { signUpUser } from '../../redux/reducers/authSlice';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

// import serviceApi from '../../services/serviceAPI';

import '../SignUp/signup.css';

export default function SignUp() {
  const dispatch = useDispatch();

  // const fetchData = async () => {
  //   try {
  //     const responseSignUp = await serviceApi.signup();
  //     console.log('responseSignUp', responseSignUp);
  //   } catch (error) {
  //     alert('Une erreur est survenue lors du chargement des données.');
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const onSubmit = (formDataSignUp) =>
    // console.log(
    //   JSON.stringify(formDataSignUp),
    dispatch(signUpUser({ formDataSignUp }));
  // );
  const { register, handleSubmit } = useForm();

  return (
    <div>
      <Header />
      <main className='main bg-dark'>
        <section className='login-content'>
          <i className='fa fa-user-circle login-icon'></i>
          <h1>Sign up</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='input-wrapper'>
              <label htmlFor='email'>Email</label>
              <input
                {...register('email')}
                type='text'
                id='email'
                placeholder='thierry@gmail.com'
              />
            </div>
            <div className='input-wrapper'>
              <label htmlFor='password'>Password</label>
              <input {...register('password')} type='password' id='password' />
            </div>
            <div className='input-wrapper'>
              <label htmlFor='firstName'>Prénom</label>
              <input
                {...register('firstName')}
                type='text'
                id='firstName'
                placeholder='Prénom'
              />
            </div>
            <div className='input-wrapper'>
              <label htmlFor='lastname'>Nom</label>
              <input
                {...register('lastname')}
                type='text'
                id='lastname'
                placeholder='Nom'
              />
            </div>
            <input type='submit' value='Submit' className='login-button' />
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}
