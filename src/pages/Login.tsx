import "./Login.css";
import loginimg from "../assets/loginimg.png";

function Login() {
  return (
    <>
      <div className="login-container">
        <div className="login-image-section">
          <img src={loginimg} alt="Login" className="login-image" />
        </div>
        <div className="login-form-section">
          <h2 className="login-title">Welcome Back!</h2>
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

            <button type="submit" className="login-submit-btn">
              Login
            </button>
          </form>
          <div className="register-text">
            Don’t have an account?<span>Register</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
