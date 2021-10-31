import Profile from '../Profile';
import PropTypes from 'prop-types';
import styles from './ProfileList.module.css';

export default function ProfileList({ users }) {
  return (
    <ul className={styles.profileList}>
      {users.map(({ id, name, tag, location, avatar, stats }) => (
        <li key={id} className={styles.profileItem}>
          <Profile
            name={name}
            tag={tag}
            location={location}
            avatar={avatar}
            stats={stats}
          />
        </li>
      ))}
    </ul>
  );
}

ProfileList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
