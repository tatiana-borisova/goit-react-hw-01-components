import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

export default function Statistics({ stats }) {
  return (
    <ul className={styles.list}>
      {stats.map(item => (
        <li
          key={item.id}
          className={styles.item}
          style={{
            backgroundColor:
              '#' +
              (Math.random().toString(16) + '000000').substring(2, 8) +
              '80',
          }}
        >
          <span className={styles.label}>{item.label}</span>
          <span className={styles.percentage}>{item.percentage}</span>
        </li>
      ))}
    </ul>
  );
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  ),
};
