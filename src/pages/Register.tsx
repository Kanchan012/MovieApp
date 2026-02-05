import "./Register.css";
import registerimg from "../assets/registerimg.png"
import { NavLink } from "react-router-dom";
import { PiHandsPrayingBold } from "react-icons/pi";
import AuthLayout from "../components/common/AuthLayout";

function Register() {
  return (
    <AuthLayout
      image={registerimg}
      imageAlt="register"
      containerClassName="register-container"
      formSectionClassName="register-form-section"
      imageSectionClassName="register-image-section"
      imageClassName="register-image"
      title={<><PiHandsPrayingBold />Welcome to Movie App</>}
      titleClassName="register-title"
      formClassName="register-form-wrapper"
      reverse={true}
    >
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
        Already have an account? <NavLink to="/login"><span>Login</span></NavLink>
      </div>
    </AuthLayout>
  )
}

export default Register
