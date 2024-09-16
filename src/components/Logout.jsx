import authService from '../services/authService'
import { useDispatch } from 'react-redux'
import { logout } from '../store/authSlice';

const Logout = () => {
    const dispatch = useDispatch();

    const handleLogout = async () => {
        try {
            await authService.logout();
            dispatch(logout());
        } catch (error) {
            console.error('Logout failed:', error);
        }        
    }

    return (
        <button onClick={handleLogout}>
            Logout
        </button>
    )
}

export default Logout