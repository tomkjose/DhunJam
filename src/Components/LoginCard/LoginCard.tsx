import React, { useState } from "react";
import "./LoginCard.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { useAuth } from "../../Provider/AuthProvider";

const LoginCard: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { signIn } = useAuth();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleViewPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    signIn(username, password);
  };

  return (
    <div className="login__container">
      <form method="POST" onSubmit={handleSubmit} className="input__form">
        {" "}
        <div className="input__box">
          <input
            type="text"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            className="input__feild"
            placeholder="Username"
          />
        </div>
        <div className="input__box">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            className="input__feild"
            placeholder="Password"
          />
          <i
            className="fa-solid fa-eye fa-lg"
            style={{ color: "#ffffff" }}
            onClick={handleViewPassword}
          ></i>
        </div>
        <button type="submit">Sign in</button>
        <div className="signup__link">New Registration ?</div>
      </form>
    </div>
  );
};

export default LoginCard;
