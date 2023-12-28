import { FriendListItem } from './FriendListItem';
import styles from '../FriendList/FriendList.module.css';
const FriendList = ({ friends }) => (
  <ul className={styles.friendList}>
    {friends.map(friend => (
      <FriendListItem key={friend.id} {...friend} />
    ))}
  </ul>
);

export { FriendList };
