import style from "./navbar.module.scss";

export const NavBar: React.FC = () => (
  <div className={style.navBar}>
    <div className={style.header_content}>
      <div className={style.logo}>
        <div className={style.logo_icon}>✓</div>
        <div className={style.logo_text}>PollSite</div>
      </div>
      <div className={style.user_actions}>
        <a
          href="#"
          className={`${style.btn} ${style.btn_primary}`}
          onClick={() => {
            /* createNewPoll */
          }}
        >
          + Create Poll
        </a>
        <a
          href="#"
          className={`${style.btn} ${style.btn_secondary}`}
          onClick={() => {
            /* logout */
          }}
        >
          Logout
        </a>
      </div>
    </div>
  </div>
);
