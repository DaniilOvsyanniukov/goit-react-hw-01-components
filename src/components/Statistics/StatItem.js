import s from './Statistics.module.css';
import { randomColor } from './randomcolor';
const StatItem = ({ id, label, percentage }) => {
  return (
    <li className={s.item} key={id} style={{ backgroundColor: randomColor() }}>
      <span className={s.label}>{label}</span>
      <span className={s.quantity}>{percentage}%</span>
    </li>
  );
};
export default StatItem;
