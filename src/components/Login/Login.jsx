import { useContext, useState } from "react"
import authContext from "../../Context/AuthContext"
import { useNavigate } from "react-router-dom"
import { ToastContext } from "../../Context/ToastProvider"
import authService from "../../lib/auth"

function Login() {
  const { setUser } = useContext(authContext)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const { showToasts } = useContext(ToastContext)

  const handleSubmit = async (e) => {
    e.preventDefault()
    await authService.login({ email, password })
    const user = await authService.getCurrentUser()
    setUser(user)
    showToasts("Signed in successfully.")
    navigate("/")
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center">
      <div className="w-full max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">
            ApplyLog
          </h1>
          <p className="mt-4 text-base text-gray-600 max-w-md leading-relaxed">
            Track, organize, and manage your job applications with clarity and focus.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-full p-8 rounded-lg bg-white border border-gray-200 shadow-sm flex flex-col gap-6"
        >
          <h1 className="text-xl font-semibold text-gray-900">
            Login
          </h1>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              required
              className="px-3 py-2 rounded-md bg-white text-gray-900 placeholder-gray-400 outline-none border border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-900"
            />
          </div>

           <div className="flex flex-col gap-2">
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-700"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
              className="px-3 py-2 rounded-md bg-white text-gray-900 placeholder-gray-400 outline-none border border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-900"
            />
          </div>

          <button
            type="submit"
            className="mt-2 py-2.5 rounded-md bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors"
          >
            Login
          </button>
          <div className="flex flex-col gap-2 text-sm text-gray-600 text-center">
            <p>
              Don't have an account?{" "}
              <span
                onClick={() => navigate("/signup")}
                className="text-gray-900 font-medium cursor-pointer hover:underline"
              >
                Sign up
              </span>
            </p>

            <p>
              <span
                onClick={() => navigate("/forgot-password")}
                className="cursor-pointer hover:underline"
              >
                Forgot password?
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login