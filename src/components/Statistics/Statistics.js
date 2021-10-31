import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
import colorMaker from '../../js/colorMaker';

export default function Statistics({ stats }) {
  return (
    <ul className={styles.list}>
      {stats.map(item => (
        <li
          key={item.id}
          className={styles.item}
          style={{
            backgroundColor: colorMaker(),
            width: item.percentage + '%',
          }}
        >
          <span className={styles.label}>{item.label}</span>
          <span className={styles.percentage}>{item.percentage}%</span>
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
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
