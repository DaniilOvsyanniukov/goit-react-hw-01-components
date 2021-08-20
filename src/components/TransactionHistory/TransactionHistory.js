import PositionElement from './PositionElement';
import s from './TransactionHistory.module.css';

const TransactionHistory = ({ transaction }) => {
  return (
    <table className={s.table}>
      <thead>
        <tr>
          <th className={s.title}>Type</th>
          <th className={s.title}>Amount</th>
          <th className={s.title}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transaction.map(el => (
          <PositionElement
            key={el.id}
            type={el.type}
            amount={el.amount}
            currency={el.currency}
          />
        ))}
      </tbody>
    </table>
  );
};
export default TransactionHistory;
