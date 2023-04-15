import React from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ArrayTransactions from '../../components/ArrayTransactions/ArrayTransactions';

import '../Transactions/transactions.css';

export default function Transactions(props) {
  return (
    <div>
      <Header />
      <section className='account'>
        <div className='account-content-wrapper-transactions'>
          <h3 className='account-title'>Argent Bank Checking (x8349)</h3>
          <p className='account-amount'>$2,082.79</p>
          <p className='account-amount-description'>Available Balance</p>
        </div>
      </section>
      <ArrayTransactions />
      <Footer />
    </div>
  );
}
