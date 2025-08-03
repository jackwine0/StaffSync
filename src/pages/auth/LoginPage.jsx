import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import Logo from "../../components/Logo";

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Mocked user database (replace with API in real app)
  const usersDB = {
    "admin@staffsync.com": { name: "Admin User", role: "admin" },
    "hr@staffsync.com": { name: "HR Manager", role: "hr" },
    "employee@staffsync.com": { name: "Employee", role: "employee" },
  };

  const DEMO_PASSWORD = "staffsync123";

  const handleInputChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = credentials;

    setIsLoading(true);
    setTimeout(() => {
      const user = usersDB[email.toLowerCase()];
      if (user && password === DEMO_PASSWORD) {
        localStorage.setItem("user", JSON.stringify({ email, ...user }));
        navigate(`/${user.role}/dashboard`);
      } else {
        setError("Invalid email or password. Please try again.");
      }
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        {/* Left image section */}
        <div className="login-image">
          <img
            src="https://res.cloudinary.com/duicyr28v/image/upload/v1753833654/download_fxllmn.jpg"
            alt="Team working"
          />
          <div className="image-overlay">
            <h3>StaffSync Portal</h3>
            <p>Workforce. Centralized.</p>
             <p className="demo-tip">
              <strong>Demo Credentials</strong>:<br />Admin:{" "}
              <code>admin@staffsync.com</code> /{" "}
              <strong>{DEMO_PASSWORD}</strong>
              <br />HR: <code>hr@staffsync.com</code> /{" "}
              <strong>{DEMO_PASSWORD}</strong>
              <br /> Employee: <code>employee@staffsync.com</code> /{" "}
              <strong>{DEMO_PASSWORD}</strong>
            </p>
          </div>
        </div>

        {/* Right form section */}
        <div className="login-form-section">
          <Logo />

          <h2 className="form-title">Sign In</h2>
          <p className="form-subtitle">Access your dashboard securely</p>

          {error && <div className="error-box">{error}</div>}

          <form onSubmit={handleSubmit} className="form">
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              value={credentials.email}
              onChange={handleInputChange}
              placeholder="you@example.com"
              required
              autoFocus
            />

            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              value={credentials.password}
              onChange={handleInputChange}
              placeholder="Enter password"
              required
            />

            <button type="submit" disabled={isLoading}>
              {isLoading ? "Signing in..." : "Login"}
            </button>
          </form>

          <div className="login-footer">
            <p>
              Forgot password? <a href="#">Recover here</a>
            </p>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
