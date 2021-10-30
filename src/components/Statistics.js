import PropTypes from 'prop-types';

export default function Statistics({ stats }) {
  return (
    <ul className="stat-list">
      {stats.map(item => (
        <li key={item.id} className="item">
          <span className="label">{item.label}</span>
          <span className="percentage">{item.percentage}</span>
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
