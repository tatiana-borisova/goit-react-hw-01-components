import PropTypes from 'prop-types';
import styles from './Friend.module.css';

export default function Friend({ name, avatar, isOnline }) {
  return (
    <li className={styles.item}>
      <span
        className={
          isOnline ? styles['status--online'] : styles['status--offline']
        }
        // style={{ backgroundColor: isOnline ? 'green' : 'red' }}
      ></span>
      <img
        className={styles.avatar}
        src={avatar}
        alt="friend's foto"
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
