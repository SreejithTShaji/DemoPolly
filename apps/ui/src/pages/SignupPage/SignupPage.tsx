import style from "./signup_page.module.scss";

function SignupPage() {
  return (
    <div className={style.signupContainer}>
      <div className={style.container}>
        <div className={style.logo_section}>
          <div className={style.logo}>
            <div className={style.logo_icon}>✓</div>
            <div className={style.logo_text}>PollSite</div>
          </div>
        </div>

        <div className={style.signup_header}>
          <h1 className={style.signup_title}>Sign Up</h1>
          <div className={style.menu_dots}>⋯</div>
        </div>

        <form id="signupForm">
          <div className={style.form_group}>
            <div className={style.input_container}>
              <div className={style.input_icon}>👤</div>
              <input
                type="text"
                className={style.form_input}
                id="username"
                placeholder="Username"
                required
              />
            </div>
            <div className={style.error_message} id="username-error"></div>
          </div>

          <div className={style.form_group}>
            <div className={style.input_container}>
              <div className={style.input_icon}>📧</div>
              <input
                type="email"
                className={style.form_input}
                id="email"
                placeholder="Email ID"
                required
              />
            </div>
            <div className={style.error_message} id="email-error"></div>
          </div>

          <div className={style.form_group}>
            <div className={style.input_container}>
              <div className={style.input_icon}>🔒</div>
              <input
                type="password"
                className={style.form_input}
                id="password"
                placeholder="Password"
                required
              />
            </div>
            <div
              className={style.password_strength}
              id="password-strength"
              style={{ display: "none" }}
            >
              <div className={style.strength_bar}>
                <div className={style.strength_fill} id="strength-fill"></div>
              </div>
              <div className={style.strength_text} id="strength-text"></div>
            </div>
            <div className={style.error_message} id="password-error"></div>
          </div>

          <div className={style.form_group}>
            <div className={style.input_container}>
              <div className={style.input_icon}>🔒</div>
              <input
                type="password"
                className={style.form_input}
                id="confirmPassword"
                placeholder="Confirm Password"
                required
              />
            </div>
            <div
              className={style.error_message}
              id="confirm-password-error"
            ></div>
          </div>

          <button type="submit" className={style.signup_btn}>
            Sign Up
          </button>
        </form>

        <div className={style.login_link}>
          <a href="#">Already have an account? Log in</a>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
