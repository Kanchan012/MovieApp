import "./Register.css";
import registerimg from "../assets/registerimg.png"
function Register() {
  return (
      <>
      <div className="register-container">
        <div className="register-form-section">
          <h2 className="register-title">Welcome Back!</h2>
          <form className="register-form">
            <label htmlFor="username" className="register-label">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="register-input"
              placeholder="Enter username"
              required
            />

            <label htmlFor="email" className="register-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="register-input"
              placeholder="Enter your email"
              required
            />

            <label htmlFor="password" className="register-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="register-input"
              placeholder="Enter your password"
              required
            />

            <button type="submit" className="register-submit-btn">
              Register
            </button>
          </form>
          <div className="register-text">
            Don’t have an account?<span>Register</span>
          </div>
        </div>
            <div className="register-image-section">
          <img src={registerimg} alt="register" className="register-image" />
        </div>
      </div>
    </>
  )
}

export default Register
