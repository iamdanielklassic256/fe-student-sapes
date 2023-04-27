import axios from "axios";
import useAuth from "../hooks/useAuth";

const logoutUrl = 'http://localhost:5000/logout'

const useLogout = () => {
    const { setAuth } = useAuth();

    const logout = async () => {
        setAuth({});
        try {
            const response = await axios(logoutUrl, {
                withCredentials: true
            });
        } catch (err) {
            console.error(err);
        }
    }

    return logout;
}

export default useLogout