import { Box, IconButton } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { Outlet, useNavigate } from 'react-router-dom';

const Layout = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <Box
        sx={{
          position: 'fixed',
          top: 16,
          left: 16,
          zIndex: 1000,
          backgroundColor: 'background.paper',
          borderRadius: '50%',
          boxShadow: 1,
          '&:hover': {
            backgroundColor: 'action.hover',
          },
        }}
      >
        <IconButton
          onClick={() => navigate(-1)}
          size="large"
          aria-label="go back"
        >
          <ArrowBack />
        </IconButton>
      </Box>
      <Outlet />
    </Box>
  );
};

export default Layout;
