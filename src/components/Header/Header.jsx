import { useContext } from "react"
import AuthContext from "../../Context/AuthContext"
import { NavLink } from "react-router-dom"

function Header() {
  const { user, logout } = useContext(AuthContext)

  if (!user) return null

  const initial = user.username.charAt(0).toUpperCase()

  return (
    <header className="sticky top-0 z-50 w-full bg-[#191919] border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-amber-500 text-black flex items-center justify-center font-semibold">
            {initial}
          </div>
          <span className="text-white text-sm font-medium">
            {user.username}
          </span>
        </div>

        <div className="flex items-center gap-4">
           <NavLink
            to="/"
            className={({ isActive }) =>
              `text-sm transition ${
                isActive ? "text-amber-400" : "text-white/80 hover:text-white"
              }`
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/add-job"
            className={({ isActive }) =>
              `text-sm transition ${
                isActive ? "text-amber-400" : "text-white/80 hover:text-white"
              }`
            }
          >
            Add Job
          </NavLink>

          <button
            onClick={logout}
            className="px-3 py-1.5 text-sm rounded-md bg-red-500/10 text-red-400 hover:bg-red-500/20 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header