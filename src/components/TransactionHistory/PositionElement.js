import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';
const PositionElement = ({ type, amount, currency }) => {
  return (
    <tr className={s.line}>
      <td className={s.value}>{type}</td>
      <td className={s.value}>{amount}</td>
      <td className={s.value}>{currency}</td>
    </tr>
  );
};
export default PositionElement;

PositionElement.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
