import styles from '../FriendList/FriendList.module.css';
const FriendList = ({ friends }) => (
  <ul className={styles.friendList}>
    {friends.map(({ id, avatar, name, isOnline }) => (
      <li key={id} className={styles.item}>
        <span className={isOnline ? styles.online : styles.offline}></span>
        <img
          className={styles.avatar}
          src={avatar}
          alt="User avatar"
          width="48"
        />
        <p className={styles.name}>{name}</p>
      </li>
    ))}
  </ul>
);

export { FriendList };
