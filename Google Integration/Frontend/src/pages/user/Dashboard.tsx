import { Link } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"

const Dashboard = () => {
    const { logout } = useAuth();
    return (
        <div>

            <h1>Dashboard</h1>
            <div style={{ display: "flex", gap: 10, justifyContent: "space-between" }}>

                <Link to="/profile">Profile</Link>
                <button onClick={() => logout()}>Logout</button>
            </div>
        </div>
    )
}

export default Dashboard