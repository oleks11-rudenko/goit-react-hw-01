import css from './FriendListItem.module.css';
import clsx from 'clsx';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={css.container}>
      <img className={css.image} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
      <p className={clsx('status', isOnline ? 'green' : 'red')}>{isOnline}</p>
    </div>
  );
}
