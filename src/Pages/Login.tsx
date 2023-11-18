import LoginCard from "../Components/LoginCard/LoginCard";
import { useAuth } from "../Provider/AuthProvider";
import "../Styles/index.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user]);

  return (
    <div className="login__card">
      <h1>Venue Admin Login</h1>
      <LoginCard />
    </div>
  );
}

export default Login;
