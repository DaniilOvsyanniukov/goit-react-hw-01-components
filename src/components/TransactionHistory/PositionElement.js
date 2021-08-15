import s from './TransactionHistory.module.css';
const PositionElement = ({ id, type, amount, currency }) => {
  return (
    <tr key={id} className={s.line}>
      <td className={s.value}>{type}</td>
      <td className={s.value}>{amount}</td>
      <td className={s.value}>{currency}</td>
    </tr>
  );
};
export default PositionElement;
