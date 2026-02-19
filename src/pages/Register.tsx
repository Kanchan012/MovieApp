import { useState } from "react";
import "./Register.css";
import registerimg from "../assets/registerimg.png"
import { NavLink, useNavigate } from "react-router-dom";
import { PiHandsPrayingBold } from "react-icons/pi";
import AuthLayout from "../components/common/AuthLayout";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
      if (!formData.email.toLowerCase().endsWith('@gmail.com')) {
        alert('Only Gmail addresses (@gmail.com) are allowed.');
        return;
      }
    const userData = {
      name: formData.username,
      email: formData.email,
      password: formData.password, 
      moviesWatched: 0,
      watchlistCount: 0,
      avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(formData.username)}&background=2e7d32&color=fff&size=250` 
    };

    localStorage.setItem('userData', JSON.stringify(userData));
    alert("Registration Successful!");
    navigate('/login');
  };

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
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="username" className="register-label">
          Username
        </label>
        <input
          type="text"
          id="username"
          className="register-input"
          placeholder="Enter username"
          value={formData.username}
          onChange={handleChange}
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
          value={formData.email}
          onChange={handleChange}
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
          value={formData.password}
          onChange={handleChange}
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
