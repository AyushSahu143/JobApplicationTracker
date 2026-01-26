import React, { useState, useContext } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import authService from "../../lib/auth";
import { ToastContext } from "../../Context/ToastProvider";

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const { showToasts } = useContext(ToastContext);

  const userId = params.get("userId");
  const secret = params.get("secret");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!password || password.length < 8) {
      showToasts("Password must be at least 8 characters.");
      return;
    }
     if (password !== confirmPassword) {
      showToasts("Passwords do not match.")
      return
    }

    try {
        await authService.resetPassword(userId, secret, password)
        showToasts("Password updated successfully.")
        navigate("/login")
    } catch (err) {
        showToasts(err.message || "Reset failed.")
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center">
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-8 bg-white rounded-lg border shadow-sm flex flex-col gap-4"
      >
        <h1 className="text-xl font-semibold">Reset Password</h1>

        <input
          type="password"
          placeholder="New password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="px-3 py-2 border rounded-md"
          required
        />

        <input
          type="password"
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="px-3 py-2 border rounded-md"
          required
        />

        <button
          type="submit"
          className="py-2 rounded-md bg-gray-900 text-white font-medium"
        >
          Update password
        </button>
      </form>
    </div>
  );
}

export default ResetPassword;
