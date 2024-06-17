import css from './TransactionHistoryItem.module.css';

const TransactionHistoryItem = ({ id, type, amount, currency }) => {
  return (
    <tr key={id} className={css['transaction-item']}>
      <td className={css['transaction-item-type']}>{type}</td>
      <td className={css['transaction-item-amount']}>{amount}</td>
      <td className={css['transaction-item-currency']}>{currency}</td>
    </tr>
  );
};

export default TransactionHistoryItem;
