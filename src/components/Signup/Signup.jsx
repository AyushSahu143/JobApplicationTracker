import React, { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../../lib/auth";
import authContext from "../../Context/AuthContext";
import { ToastContext } from "../../Context/ToastProvider";

function Signup() {
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [signupEmail, setsignupEmail] = useState("");
  const [createPassword, setcreatePassword] = useState("");
  const { setUser } = useContext(authContext);
  const { showToasts } = useContext(ToastContext)

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (createPassword.length < 8) {
      return;
    }
    await authService.createAccount({ email: signupEmail, password: createPassword, name });

    // IMPORTANT — explicitly fetch user AFTER session
    const user = await authService.getCurrentUser();

    setUser(user);
    showToasts("Created account successfully.")
    navigate("/");
  };
  return (
    <div className="min-h-screen bg-gray-50 flex items-center">
      <div className="w-full max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left branding */}
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">
            ApplyLog
          </h1>
          <p className="mt-4 text-base text-gray-600 max-w-md leading-relaxed">
            Create your account and start tracking job applications with
            clarity.
          </p>
        </div>

        {/* Signup form */}
        <form
          className="w-full p-8 rounded-lg bg-white border border-gray-200 shadow-sm flex flex-col gap-6"
          onSubmit={handleSubmit}
        >
          <h1 className="text-xl font-semibold text-gray-900">Sign up</h1>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              placeholder="Choose a username"
              value={name}
              onChange={(e) => setname(e.target.value)}
              className="px-3 py-2 rounded-md border border-gray-300 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={signupEmail}
              onChange={(e) => setsignupEmail(e.target.value)}
              className="px-3 py-2 rounded-md border border-gray-300 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Create a password"
              value={createPassword}
              onChange={(e) => setcreatePassword(e.target.value)}
              className="px-3 py-2 rounded-md border border-gray-300 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900"
            />
          </div>

          <button
            type="submit"
            className="mt-2 py-2.5 rounded-md bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors"
          >
            Create account
          </button>

          <p className="text-sm text-gray-600 text-center">
            Already have an account?{" "}
            <span
              className="text-gray-900 font-medium cursor-pointer hover:underline"
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
