import clsx from 'clsx';
import css from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css['friend-item-wrapper']}>
      <img
        src={avatar}
        alt={name}
        width="48"
        className={css['friend-item-img']}
      />
      <p className={css['friend-item-name']}>{name}</p>
      <p
        className={clsx(
          css['friend-item-status'],
          isOnline ? css['green'] : css['red']
        )}
      >
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};

export default FriendListItem;
