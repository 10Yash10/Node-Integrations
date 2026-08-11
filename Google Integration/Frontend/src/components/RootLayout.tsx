import { Link, Outlet } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const RootLayout = () => {
    const { user, logout } = useAuth();
    return (
        <div style={{ height: "100vh" }}>
            <nav style={{ padding: 10, borderBottom: '2px', borderBottomStyle: "solid", borderBottomColor: "white" }}>

                <h2 style={{ textAlign: "left" }}>Google Auth</h2>
                <div style={{ display: "flex", gap: "10px", justifyContent: "space-between" }}>

                    <div style={{ display: "flex", gap: 10 }}>
                        <Link to="/">Home</Link>
                        <Link to="/Dashboard">Dashboard</Link>
                        <Link to="/profile">Profile</Link>
                    </div>

                    {!user ? <Link to="/login">Login</Link> : <button onClick={() => logout()}>logout</button>}
                </div>
            </nav>

            <div style={{ height: "80vh", display: "flex", justifyContent: "center", alignItems: "center" }}>

                <Outlet />
            </div>

            <footer style={{ height: "10vh", width: "100%", background: "white", color: "black", display: "flex", justifyContent: "center", alignItems: 'center' }}>
                <h1 style={{ color: 'black' }}>Google OAuth</h1>
            </footer>
        </div>
    )
}

export default RootLayout