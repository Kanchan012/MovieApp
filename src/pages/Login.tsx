import "./Login.css";
import loginimg from "../assets/loginimg.png";
import { NavLink } from "react-router-dom";
import { LuHeartHandshake } from "react-icons/lu";
import AuthLayout from "../components/common/AuthLayout";

function Login() {
  return (
    <AuthLayout
      image={loginimg}
      imageAlt="Login"
      containerClassName="login-container"
      formSectionClassName="login-form-section"
      imageSectionClassName="login-image-section"
      imageClassName="login-image"
      title={<><LuHeartHandshake />Welcome Back!</>}
      titleClassName="login-title"
      formClassName="login-form-wrapper"
    >
      <form className="login-form">
        <label htmlFor="email" className="login-label">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="login-input"
          placeholder="Enter your email"
          required
        />

        <label htmlFor="password" className="login-label">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="login-input"
          placeholder="Enter your password"
          required
        />
        <br />
        <button type="submit" className="login-submit-btn">
          Login
        </button>
      </form>
      <div className="register-text">
        Don’t have an account? <NavLink to="/register"><span>Register</span></NavLink>
      </div>
    </AuthLayout>
  );
}

export default Login;
