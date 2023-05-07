import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../feature/auth/authSlice";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
    const token = useSelector(selectCurrentToken)
    const location = useLocation();
    const { auth } = useAuth();

    return (
            auth?.roles?.find(role => allowedRoles?.includes(role)),
            token
            ? <Outlet />
            : auth?.accessToken //changed from user to accessToken to persist login after refresh
                ? <Navigate to="/unauthorized" state={{ from: location }} replace />
                : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default RequireAuth;