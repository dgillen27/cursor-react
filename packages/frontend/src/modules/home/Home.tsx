import {
  Container,
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  CardActionArea,
} from '@mui/material';
import {
  Memory,
  Speed,
  CloudQueue,
  Storage,
  Security,
  Code,
  People,
  Group,
  Photo,
  Settings,
  Home as HomeIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import MetricCard from './components/MetricCard';
import ActivityChart from './components/ActivityChart';
import LogoutButton from '../auth/components/LogoutButton';

const Home = () => {
  const navigate = useNavigate();

  const metrics = [
    {
      title: 'CPU Usage',
      value: '67%',
      icon: <Memory fontSize="large" />,
      color: '#2196f3',
    },
    {
      title: 'Memory Load',
      value: '5.2 GB',
      icon: <Storage fontSize="large" />,
      color: '#4caf50',
    },
    {
      title: 'Network Speed',
      value: '850 Mb/s',
      icon: <Speed fontSize="large" />,
      color: '#ff9800',
    },
    {
      title: 'Cloud Storage',
      value: '1.2 TB',
      icon: <CloudQueue fontSize="large" />,
      color: '#9c27b0',
    },
    {
      title: 'Active Services',
      value: '23',
      icon: <Code fontSize="large" />,
      color: '#f44336',
    },
    {
      title: 'Security Status',
      value: 'Protected',
      icon: <Security fontSize="large" />,
      color: '#009688',
    },
  ];

  const navigationCards = [
    {
      title: 'Social Feed',
      path: '/social',
      icon: <HomeIcon fontSize="large" />,
      color: '#2196f3',
    },
    {
      title: 'Friends',
      path: '/friends',
      icon: <People fontSize="large" />,
      color: '#4caf50',
    },
    {
      title: 'Groups',
      path: '/groups',
      icon: <Group fontSize="large" />,
      color: '#ff9800',
    },
    {
      title: 'Photos',
      path: '/photos',
      icon: <Photo fontSize="large" />,
      color: '#9c27b0',
    },
    {
      title: 'Settings',
      path: '/settings',
      icon: <Settings fontSize="large" />,
      color: '#009688',
    },
  ];

  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ position: 'relative' }}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Typography variant="h4" gutterBottom>
            System Dashboard
          </Typography>
        </motion.div>
        <LogoutButton />
      </Box>

      <Grid container spacing={3}>
        {metrics.map((metric, index) => (
          <Grid item xs={12} sm={6} md={4} key={metric.title}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <MetricCard {...metric} />
            </motion.div>
          </Grid>
        ))}
        <Grid item xs={12}>
          <ActivityChart />
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
            Navigation
          </Typography>
        </Grid>
        {navigationCards.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={card.title}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card sx={{ height: '100%' }}>
                <CardActionArea
                  onClick={() => navigate(card.path)}
                  sx={{ height: '100%' }}
                >
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Box sx={{ color: card.color, mr: 2 }}>{card.icon}</Box>
                      <Typography variant="h6">{card.title}</Typography>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
