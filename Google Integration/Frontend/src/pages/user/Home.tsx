import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";


const Home = () => {

    const { user, logout } = useAuth();
    return (
        <div>

            <h1>Home</h1>
            <div style={{ display: "flex", gap: "10px", justifyContent: "space-between" }}>


                <div style={{ display: "flex", gap: 10 }}>

                    <Link to="/">Home</Link>
                    <Link to="/Dashboard">Dashboard</Link>
                    <Link to="/profile">Profile</Link>
                </div>

                {!user ? <Link to="/login">Login</Link> : <button onClick={() => logout()}>logout</button>}
            </div>
        </div>
    )
}

export default Home