import { Link } from 'react-router-dom';

/**
 * AccountUser component.
 * @param {Object} props - The component props.
 * @param {string} props.accountTitle - The title of the account.
 * @param {string} props.accountAmount - The amount of the account.
 * @param {string} props.accountAmountDescription - The description of the account amount.
 * @returns {JSX.Element} AccountUser component.
 */
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
