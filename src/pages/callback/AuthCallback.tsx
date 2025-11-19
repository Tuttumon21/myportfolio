
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { AuthService } from "../../services/authService"

export default function AuthCallback() {
  const navigate = useNavigate()

  useEffect(() => {
    (async () => {
      try {
        const user = await AuthService.handleAuthCallback()
        console.log("After callback, user:", user)
        navigate("/") // or wherever your main screen is
      } catch (err) {
        console.error("Auth callback failed:", err)
        navigate("/") // maybe show an error toast
      }
    })()
  }, [navigate])

  return <div className="text-white">Signing you in...</div>
}
