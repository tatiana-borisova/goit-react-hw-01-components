import PropTypes from 'prop-types';

export default function Friend({ name, avatar, isOnline }) {
  return (
    <li className="item">
      <span className="status">{isOnline ? 'Yes' : 'No'}</span>
      <img className="avatar" src={avatar} alt="friend's foto" width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
