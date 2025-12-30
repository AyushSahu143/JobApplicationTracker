import { useContext, useState } from "react"
import authContext from "../../Context/AuthContext"
import { useNavigate } from "react-router-dom"

function Login() {
  const { setUser } = useContext(authContext)
  const [username, setUsername] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!username.trim()) return

    const user = { username }
    localStorage.setItem("auth_user", JSON.stringify(user))
    setUser(user)
    navigate("/")
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex items-center">
      <div className="w-full max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
            ApplyLog
          </h1>
          <p className="mt-4 text-base text-neutral-400 max-w-md">
            Track, organize, and manage your job applications with{" "}
            <span className="text-amber-400 font-medium">clarity</span> and{" "}
            <span className="text-amber-400 font-medium">focus</span>.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-full p-6 rounded-xl bg-neutral-900/60 border border-white/10 backdrop-blur-sm flex flex-col gap-6"
        >
          <h1 className="text-xl font-semibold text-white text-center">
            Login
          </h1>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="username"
              className="text-sm text-neutral-400"
            >
              Username
            </label>

            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              required
              className="px-3 py-2 rounded-md bg-neutral-950 text-white placeholder-white/40 outline-none border border-white/10 focus:border-amber-500"
            />
          </div>

          <button
            type="submit"
            className="mt-2 py-2 rounded-md bg-amber-500/90 text-black font-medium hover:bg-amber-500 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login