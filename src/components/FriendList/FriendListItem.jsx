import css from './FriendListItem.module.css';
import clsx from 'clsx';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <>
      <img className={css.image} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
      <p className={clsx(css.status, isOnline ? css.green : css.red)}>
        {String(isOnline)}
      </p>
    </>
  );
}
