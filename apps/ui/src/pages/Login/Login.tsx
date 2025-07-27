import style from "./login.module.scss";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <div className={style.login_container}>
      <div className={style.container}>
        <div className={style.logo_section}>
          <div className={style.logo}>
            <div className={style.logo_icon}>✓</div>
            <div className={style.logo_text}>PollSite</div>
          </div>
        </div>

        <div className={style.login_header}>
          <h1 className={style.login_title}>Login</h1>
          <div className={style.menu_dots}>⋯</div>
        </div>

        <form id="loginForm">
          <div className={style.form_group}>
            <div className={style.input_container}>
              <div className={style.input_icon}>👤</div>
              <input
                type="text"
                className={style.form_input}
                placeholder="Username"
                required
              />
            </div>
          </div>

          <div className={style.form_group}>
            <div className={style.input_container}>
              <div className={style.input_icon}>🔒</div>
              <input
                type="password"
                className={style.form_input}
                placeholder="Password"
                required
              />
            </div>
          </div>

          <button
            onClick={() => {
              navigate("/");
            }}
            type="submit"
            className={style.login_btn}
          >
            Log In
          </button>
        </form>

        {/* <div className={style.forgot_password}>
            <a href="#" >Forgot password?</a>
        </div> */}
      </div>
    </div>
  );
}

export default Login;
