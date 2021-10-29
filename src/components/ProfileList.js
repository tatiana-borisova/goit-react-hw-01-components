import Profile from './Profile';
import PropTypes from 'prop-types';

export default function ProfileList({ users }) {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
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
