import { Routes, Route } from "react-router-dom";
import Home from "./pages/user/Home";
import { ProtectedRoute, PublicRoute } from "./components/RouteGuard";
import Login from "./pages/auth/Login";
import './App.css'
import Profile from "./pages/user/Profile";
import Dashboard from "./pages/user/Dashboard";

function App() {
  return <Routes>
    {/* global route */}
    <Route path="/" element={<Home />} />

    {/* public-only routes */}
    <Route element={<PublicRoute />}>
      <Route path="/login" element={<Login />} />
    </Route>

    {/* protected Route */}
    <Route element={<ProtectedRoute />}>
      <Route path="/profile" element={<Profile />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Route>
  </Routes>
}

export default App;