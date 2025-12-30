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
    <div className="min-h-screen flex items-center justify-center bg-neutral-950 text-neutral-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm p-6 rounded-xl bg-neutral-900/60 border border-white/10 backdrop-blur-sm flex flex-col gap-6"
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
  )
}

export default Login