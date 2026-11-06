import { useContext, useEffect, useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import "./index.css";

function SignIn() {
  const [username, setUsername] = useState("lee");
  const [password, setPassword] = useState("");
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (auth?.user) {
      navigate("/home-page", { replace: true });
    }
  }, [auth, navigate]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = username || "default username";
    auth?.login(name);
    navigate("/home-page", { replace: true });
  };

  return (
    <div className="signin-page">
      <div className="signin-card">
        <h1>Sign In</h1>
        <form className="signin-form" onSubmit={handleSubmit}>
          <input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="btn">
            Sign In
          </button>
          {/* <p className="signin-footer" >Forgot your password?</p> */}
        </form>
      </div>
    </div>
  );
}

export default SignIn;