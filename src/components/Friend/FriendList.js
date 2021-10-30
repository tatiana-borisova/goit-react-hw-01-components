import Friend from './Friend';
import PropTypes from 'prop-types';
import styles from './Friend.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={styles.list}>
      {friends.map(friend => (
        <Friend
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};
