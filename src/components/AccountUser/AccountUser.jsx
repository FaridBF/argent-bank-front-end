import React from 'react';

import { Link } from 'react-router-dom';

export default function AccountUser({
  accountTitle,
  accountAmount,
  accountAmountDescription
}) {
  return (
    <section className='account'>
      <div className='account-content-wrapper'>
        <h3 className='account-title'>{accountTitle}</h3>
        <p className='account-amount'>{accountAmount}</p>
        <p className='account-amount-description'>{accountAmountDescription}</p>
      </div>
      <div className='account-content-wrapper cta'>
        <Link className='link-transactions' to='/transactions'>
          <button className='transaction-button'>View transactions</button>
        </Link>
      </div>
    </section>
  );
}
