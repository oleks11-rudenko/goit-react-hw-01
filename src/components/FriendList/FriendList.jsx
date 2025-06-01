import css from './FriendList.module.css';
import FriendListItem from './FriendListItem';

export default function FriendList({ friends }) {
  return (
    <ul className={css.friends}>
      {friends.map((friend) => (
        <li key={friend.id} className="friendItem">
          <FriendListItem friend={friend} />
        </li>
      ))}
    </ul>
  );
}
