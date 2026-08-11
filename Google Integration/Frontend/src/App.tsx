import { Routes, Route } from "react-router-dom";
import Home from "./pages/user/Home";
import { ProtectedRoute, PublicRoute } from "./components/RouteGuard";
import Login from "./pages/auth/Login";
import './App.css'
import Profile from "./pages/user/Profile";
import Dashboard from "./pages/user/Dashboard";
import RootLayout from "./components/RootLayout";


function App() {
  return <Routes>
    {/* public-only routes */}
    <Route element={<PublicRoute />}>
      <Route path="/login" element={<Login />} />
    </Route>

    {/* main root layout */}
    <Route element={<RootLayout />}>

      {/* global route */}
      <Route path="/" element={<Home />} />


      {/* protected Route */}
      <Route element={<ProtectedRoute />}>
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Route>
  </Routes>
}

export default App;