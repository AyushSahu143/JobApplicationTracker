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
    <div className="min-h-screen flex items-center justify-center bg-[#242424]">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-[#191919] p-6 rounded-lg shadow-lg flex flex-col gap-6"
      >
        <h1 className="text-xl font-semibold text-white text-center">
          Login
        </h1>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="username"
            className="text-sm text-white/70"
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
            className="px-3 py-2 rounded-md bg-[#242424] text-white placeholder-white/40 outline-none border border-white/10 focus:border-amber-500"
          />
        </div>

        <button
          type="submit"
          className="mt-2 py-2 rounded-md bg-amber-500 text-black font-medium hover:bg-amber-400 transition"
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default Login