import type { RouteObject } from 'react-router-dom';
import ErrorPage from '~/shared/components/ErrorPage';
import LoginPage from '~/modules/auth/LoginPage';
import RegisterPage from '~/modules/auth/RegisterPage';
import Profile from '~/modules/profile/Profile';
import Home from '~/modules/home/Home';
import NotFound from '~/shared/components/NotFound';
import Layout from './shared/components/Layout';
import HomePage from '~/modules/social/HomePage';
import FriendsPage from '~/modules/social/FriendsPage';
import GroupsPage from '~/modules/social/GroupsPage';
import PhotosPage from '~/modules/social/PhotosPage';
import SettingsPage from '~/modules/settings/SettingsPage';

const routes: RouteObject[] = [
  {
    path: '/login',
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/user/:userId',
        element: <Profile />,
      },
      {
        path: '/social',
        element: <HomePage />,
      },
      {
        path: '/friends',
        element: <FriendsPage />,
      },
      {
        path: '/groups',
        element: <GroupsPage />,
      },
      {
        path: '/photos',
        element: <PhotosPage />,
      },
      {
        path: '/settings',
        element: <SettingsPage />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export { routes };
