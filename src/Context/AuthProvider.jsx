import authContext from "./AuthContext"
import { useEffect, useState } from "react"

function AuthProvider({children}) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const storedUser = localStorage.getItem("auth_user")
        if(storedUser) {
            setUser(JSON.parse(storedUser))
        }
        setLoading(false)
    }, [])

    const logout = () => {
        localStorage.removeItem("auth_user")
        setUser(null)
    }
  return (
    <authContext.Provider value={{user, setUser, logout, loading}}>
        {children}
    </authContext.Provider>
  )
}

export default AuthProvider