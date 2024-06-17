import css from './TransactionHistory.module.css';
import TransactionHistoryItem from '../TransactionHistoryItem/TransactionHistoryItem';

const TransactionHistory = ({ items }) => {
  return (
    <table className={css['transaction']}>
      <thead className={css['transaction-header']}>
        <tr>
          <th className={css['transaction-header-title']}>Type</th>
          <th className={css['transaction-header-title']}>Amount</th>
          <th className={css['transaction-header-title']}>Currency</th>
        </tr>
      </thead>

      <tbody className={css['transaction-list']}>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <TransactionHistoryItem
              key={id}
              type={type}
              amount={amount}
              currency={currency}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
