import StatItem from './StatItem';
import s from './Statistics.module.css';
const Statistics = ({ statistics }) => {
  return (
    <section className={s.container}>
      <h2 className={s.title}>Upload stats</h2>

      <ul className={s.list}>
        {statistics.map(el => (
          <StatItem id={el.id} label={el.label} percentage={el.percentage} />
        ))}
      </ul>
    </section>
  );
};
export default Statistics;
