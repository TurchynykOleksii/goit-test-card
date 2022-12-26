import css from './Card.module.css';
import bg from '../../background.png';
import logo from '../../logo.png';

export const Card = ({ handleButton, stateInfo }) => {
  const {
    data: { avatar, user, followers, tweets, isFollow },
  } = stateInfo;
  let updateFollower = isFollow ? followers + 1 : followers;
  return (
    <div className={css.card}>
      <div className={css.logo}>
        <img src={logo} alt="logo" />
      </div>
      <div className="asdasda">
        <img src={bg} alt="background" />
      </div>
      <div className={css.userInfoContainer}>
        <div className={css.avatarContainer}>
          <img className={css.avatar} src={avatar} alt="" />
        </div>
        <p className={css.user}>{user}</p>
        <p className={css.tweets}>
          <span className={css.tweets}>{tweets}</span>
          <span>tweets</span>
        </p>
        <p className={css.followers}>
          <span className={css.followers}>
            {updateFollower.toLocaleString('EN-en')}
          </span>
          <span>Followers</span>
        </p>
        <button
          className={`${css.button} + ${isFollow && css.active}`}
          type="button"
          onClick={() => handleButton()}
        >
          {isFollow ? 'Following' : 'Follow'}
        </button>
      </div>
    </div>
  );
};
