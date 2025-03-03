// src/components/Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginAdmin } from "../redux/authSlice";
import Swal from "sweetalert2";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const handleLogin = () => {
    dispatch(loginAdmin({ email, password }))
      .unwrap()
      .then(() => {
        // Show success alert on successful login
        Swal.fire({
          icon: "success",
          title: "Logged In",
          text: "You have successfully logged in!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/dashboard-layout/analytics");
      })
      .catch(() => {
        // Show error alert if login fails
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: "Invalid email or password. Please try again.",
        });
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-400">
      <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Login</h2>
        <div className="space-y-4">
          <div>
            <label className="text-gray-600 font-medium mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-gray-200 text-gray-800 border-2 border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="text-gray-600 font-medium mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-gray-200 text-gray-800 border-2 border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your password"
            />
          </div>
          <button
            onClick={handleLogin}
            disabled={loading || !email || !password}
            className="w-full bg-blue-500 text-white font-bold py-3 rounded hover:bg-blue-600 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
          {error && (
            <div className="text-red-500 text-center font-medium">{error}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
