import { useState } from "react";
import "./Login.css";
import loginimg from "../assets/loginimg.png";
import { NavLink, useNavigate } from "react-router-dom";
import { LuHeartHandshake } from "react-icons/lu";
import AuthLayout from "../components/common/AuthLayout";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/authSlice";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showFlag, setShowFlag] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const storedUser = localStorage.getItem('userData');

    if (storedUser) {
      const userData = JSON.parse(storedUser);
      if (formData.email === userData.email && formData.password === userData.password) {
        setShowFlag(true);
        localStorage.setItem('isLoggedIn', 'true');
         dispatch(login({
          name: userData.name,
          email: userData.email,
          bio: userData.bio,
          moviesWatched: userData.moviesWatched,
          avatar: userData.avatar
        }));
        window.dispatchEvent(new Event('authChange'));

        alert("Login Successful! \n\nFLAG: MOVIEAPP{LOGIN_SUCCESS_2026}");

        setTimeout(() => {
          navigate("/profile");
        }, 500);
      } else {
        setError('Invalid email or password.');
      }
    } else {
      setError('No user registered. Please register first.');
    }
  };

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
      <form className="login-form" onSubmit={handleSubmit}>
        {error && <div style={{ color: '#fc8181', marginBottom: '15px', textAlign: 'center', fontSize: '0.9rem' }}>{error}</div>}
        <label htmlFor="email" className="login-label">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="login-input"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
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
          value={formData.password}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit" className="login-submit-btn">
          Login
        </button>
      </form>
      {showFlag && (
        <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#e6fffa', border: '1px solid #38b2ac', borderRadius: '5px', color: '#2c7a7b', textAlign: 'center' }}>
          <strong>Success!</strong> Flag revealed: <code>MOVIEAPP{'{'}LOGIN_SUCCESS_2026{'}'}</code>
        </div>
      )}
      <div className="register-text">
        Don’t have an account? <NavLink to="/register"><span>Register</span></NavLink>
      </div>
    </AuthLayout>
  );
}

export default Login;
