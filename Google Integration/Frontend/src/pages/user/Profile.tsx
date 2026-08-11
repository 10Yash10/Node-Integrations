import { Link } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"

const Profile = () => {
    const { logout } = useAuth();
    return (
        <div>

            <h1>Profile</h1>
            <div style={{ display: "flex", gap: 10, justifyContent: "space-between" }}>

                <Link to="/dashboard">Dashboard</Link>
                <button onClick={() => logout()}>Logout</button>
            </div>
        </div>
    )
}

export default Profile