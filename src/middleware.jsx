import { Link, Navigate, Outlet } from 'react-router-dom';
import { jwtVerify } from 'jose';
import { useEffect, useState } from 'react';

const AuthMiddleware = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    useEffect(() => {
        const verifyToken = async () => {
            const token = localStorage.getItem('token');
            const secretKey = new TextEncoder().encode('minhaChaveSecreta');

            if (!token) {
                setIsAuthenticated(false);
                return;
            }

            try {
                await jwtVerify(token, secretKey);
                setIsAuthenticated(true);
            } catch (error) {
                console.warn('Token inválido ou expirado', error);
                setIsAuthenticated(false);
            }
        };

        verifyToken();
    }, []);

    if (isAuthenticated === null) {
        return <p>Verificando autenticação...</p>; // ou um spinner, se preferir
    }

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default AuthMiddleware;
