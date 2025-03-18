import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '~/shared/components/Navbar';

const LayoutContainer = styled.div`
  min-height: 100vh;
  background: #f0f2f5;
`;

const SocialLayout: React.FC = () => {
  return (
    <LayoutContainer>
      <Navbar />
      <Outlet />
    </LayoutContainer>
  );
};

export default SocialLayout;
