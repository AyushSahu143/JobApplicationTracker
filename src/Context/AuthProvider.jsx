import authContext from "./AuthContext"
import { useEffect, useState, useContext } from "react"
import { ToastContext } from "./ToastProvider"
import authService from "../lib/auth"

function AuthProvider({children}) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const { showToasts } = useContext(ToastContext)

    useEffect(() => {
       async function checkUser() {
        try {
            const currentUser = await authService.getCurrentUser()
            if(currentUser) {
                setUser(currentUser)
            } else {
                setUser(null)
            }
        } catch (error) {
            setUser(null)
        } finally {
            setLoading(false)
        }
       }
       checkUser()
    }, [])

    const logout = async () => {
        await authService.logout()
        setUser(null)
        showToasts("Signed out successfully.")
    }
  return (
    <authContext.Provider value={{user, setUser, logout, loading}}>
        {children}
    </authContext.Provider>
  )
}

export default AuthProvider