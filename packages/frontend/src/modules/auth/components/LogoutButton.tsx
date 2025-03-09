import { Button } from '@mui/material';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { Logout as LogoutIcon } from '@mui/icons-material';
import { LOGOUT_MUTATION } from '../graphql/mutations';

const LogoutButton = () => {
  const navigate = useNavigate();
  const [logout] = useMutation(LOGOUT_MUTATION);

  const handleLogout = async () => {
    try {
      const { data } = await logout();
      if (data.logout.success) {
        // Clear token from localStorage
        localStorage.removeItem('token');
        // Redirect to login page
        navigate('/login');
      }
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <Button
      variant="outlined"
      color="inherit"
      onClick={handleLogout}
      startIcon={<LogoutIcon />}
      sx={{
        position: 'absolute',
        top: 16,
        right: 16,
      }}
    >
      Logout
    </Button>
  );
};

export default LogoutButton;
