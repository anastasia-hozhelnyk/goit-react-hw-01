import css from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css['profile']}>
      <div className={css['profile-content']}>
        <img src={image} alt={name} className={css['profile-img']} />
        <p className={css['profile-name']}>{name}</p>
        <p className={css['profile-tag']}>@{tag}</p>
        <p className={css['profile-location']}>{location}</p>
      </div>
      <ul className={css['profile-list']}>
        <li className={css['profile-item']}>
          <span className={css['profile-item-title']}>Followers</span>
          <span className={css['profile-item-counter']}>{stats.followers}</span>
        </li>
        <li className={css['profile-item']}>
          <span className={css['profile-item-title']}>Views</span>
          <span className={css['profile-item-counter']}>{stats.views}</span>
        </li>
        <li className={css['profile-item']}>
          <span className={css['profile-item-title']}>Likes</span>
          <span className={css['profile-item-counter']}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
