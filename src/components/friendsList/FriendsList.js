import React from 'react';
import PropTypes from 'prop-types';
import './FriendsList.css';

export const FriendList = props => {
  const liItem = props.friends.map(el => {
    return <FriendListItem data={el} key={el.id} />;
  });

  return <ul className="friend-list">{liItem}</ul>;
};

const FriendListItem = el => {
  return (
    <li className="item">
      <span className={`status ${el.data.isOnline ? 'active' : ''}`}></span>
      <img
        className="avatar"
        src={el.data.avatar}
        alt="User avatar"
        width="48"
      />
      <p className="name">{el.data.name}</p>
    </li>
  );
};

FriendList.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
};

FriendListItem.propTypes = {
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};
