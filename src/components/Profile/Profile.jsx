import css from './Profile.module.css';

export default function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css.container}>
      <div className={css.card}>
        <img className={css.image} src={image} alt={name} />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.statsItem}>
          <span className={css.statsName}>Followers</span>
          <span className={css.statsValue}>{followers}</span>
        </li>
        <li className={css.statsItem}>
          <span className={css.statsName}>Views</span>
          <span className={css.statsValue}>{views}</span>
        </li>
        <li className={css.statsItem}>
          <span className={css.statsName}>Likes</span>
          <span className={css.statsValue}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
