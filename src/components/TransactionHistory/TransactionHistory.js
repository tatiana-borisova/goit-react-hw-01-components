import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={styles.transactions}>
      <thead>
        <tr>
          <th className={styles.title}>Type</th>
          <th className={styles.title}>Amount</th>
          <th className={styles.title}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr key={item.id} className={styles.body}>
            <td className={styles.string}>{item.type}</td>
            <td className={styles.string}>{item.amount}</td>
            <td className={styles.string}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};
