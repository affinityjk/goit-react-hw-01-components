import PropTypes from 'prop-types';
import defaultImg from '../../images/defaultImg.jpg';

const FriendListItem = ({ avatar = defaultImg, name, isOnline }) => {
  return (
    <li class="item">
      <span class="status"></span>
      <img class="avatar" src={avatar} alt={name} width="48" />
      <p class="name">{name}</p>
    </li>
  )
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;