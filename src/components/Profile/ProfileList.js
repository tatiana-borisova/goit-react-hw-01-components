import Profile from './Profile';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';

export default function ProfileList({ users }) {
  return (
    <ul className={styles.profileList}>
      {users.map(user => (
        <li key={user.id} className={styles.profileItem}>
          <Profile
            name={user.name}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
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
