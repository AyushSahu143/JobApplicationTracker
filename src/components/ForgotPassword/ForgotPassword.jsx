import React, { useContext, useState } from "react"
import authService from "../../lib/auth"
import { ToastContext } from "../../Context/ToastProvider"
import { useNavigate } from "react-router-dom"

function ForgotPassword() {
  const navigate = useNavigate()
   const [email, setEmail] = useState("")
  const { showToasts } = useContext(ToastContext)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await authService.forgotPassword(email)
      showToasts("Password reset link sent to your email.")
    } catch (err) {
      showToasts(err.message || "Failed to send reset email.")
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center">
      <div className="w-full max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Left branding */}
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">
            ApplyLog
          </h1>
          <p className="mt-4 text-base text-gray-600 max-w-md leading-relaxed">
            Forgot your password? No worries. We’ll help you reset it securely.
          </p>
        </div>

        {/* Forgot password form */}
        <form className="w-full p-8 rounded-lg bg-white border border-gray-200 shadow-sm flex flex-col gap-6" onSubmit={handleSubmit}>
          <h1 className="text-xl font-semibold text-gray-900">
            Reset password
          </h1>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your registered email"
              className="px-3 py-2 rounded-md border border-gray-300 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900"
            />
          </div>

          <button
            type="submit"
            className="mt-2 py-2.5 rounded-md bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors"
          >
            Send reset link
          </button>

          <p className="text-sm text-gray-600 text-center">
            Remembered your password?{" "}
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
  )
}

export default ForgotPassword