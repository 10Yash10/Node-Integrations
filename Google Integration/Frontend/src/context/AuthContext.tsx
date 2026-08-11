import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

type AuthContextType = {
    user: any;
    loading: boolean;
    login: (token: any) => void;
    logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check localStorage for an existing token on boot
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            // Decode your token here or make a fast /me verification request
            setUser({ token: storedToken });
        }
        setLoading(false);
    }, []);

    const login = (token: any) => {
        localStorage.setItem('token', token);
        setUser({ token });
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, logout }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within AuthProvider');
    }
    return context;
};
