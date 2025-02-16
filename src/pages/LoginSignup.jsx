import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/Login.css';

export const LoginSignup = () => {
  const navigate = useNavigate();
  const [action, setAction] = useState("Login");
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedLoginStatus = localStorage.getItem("isLoggedIn");
    if (storedLoginStatus === "true") {
      setIsLoggedIn(true);
      setAction("Logout");
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (action === "Signup" && !formData.name) {
      setError("Name is required");
      return;
    }
    if (!formData.email || !formData.password) {
      setError("Email and Password are required");
      return;
    }
    setError("");

    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
    setAction("Logout");
    

    alert(`${action} successful!`);
    navigate("/home");
    window.location.reload();
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    setAction("Login");
    setFormData({ name: "", email: "", password: "" });
    navigate("/");
  };

  return (
    <div className='login'>
      <div className="login-container">
        <h1>{isLoggedIn ? "Welcome!" : action}</h1>
        {!isLoggedIn ? (
          <>
            <div className="login-fields">
              {action === "Signup" && (
                <input type="text" name="name" placeholder='Your Name' value={formData.name} onChange={handleChange} />
              )}
              <input type="email" name="email" placeholder='Email Address' value={formData.email} onChange={handleChange} />
              <div className="password-container">
                <input 
                  type={showPassword ? "text" : "password"} 
                  name="password" 
                  placeholder='Password' 
                  value={formData.password} 
                  onChange={handleChange} 
                />
                <button type="button" className="eye-button" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? "👁️" : "👁️‍🗨️"}
                </button>
              </div>
            </div>
            {error && <p className="error-message">{error}</p>}
            <button onClick={handleSubmit}>Login</button>
            <p className="loginsignup-toggle" onClick={() => setAction(action === "Login" ? "Signup" : "Login")}> 
              {action === "Login" ? "Don't have an account? Signup here" : "Already have an account? Login here"}
            </p>
            {action === "Signup" && (
              <div className="login-agree">
                <input type="checkbox" name='' id='' />
                <p>By continuing, I agree to the Terms of Use & Privacy Policy</p>
              </div>
            )}
          </>
        ) : (
          <button onClick={handleLogout} className="logout-button">Logout</button>
        )}
      </div>
    </div>
  );
};

