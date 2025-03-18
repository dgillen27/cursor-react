import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { Box, IconButton } from '@mui/material';

const NavContainer = styled.nav`
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const NavContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
`;

const Logo = styled(Link)`
  color: #1877f2;
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 8px;
`;

interface NavLinkProps {
  active: boolean;
}

const NavLink = styled(Link)<NavLinkProps>`
  padding: 8px 16px;
  color: ${(props) => (props.active ? '#1877f2' : '#65676b')};
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.2s;

  &:hover {
    background: #f0f2f5;
  }
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ProfilePic = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #e4e6eb;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <NavContainer>
      <NavContent>
        <Logo to="/home">facebook</Logo>
        <Box></Box>

        <NavLinks>
          <NavLink to="/home" active={location.pathname === '/home'}>
            Home
          </NavLink>
          <NavLink to="/friends" active={location.pathname === '/friends'}>
            Friends
          </NavLink>
          <NavLink to="/groups" active={location.pathname === '/groups'}>
            Groups
          </NavLink>
          <NavLink to="/photos" active={location.pathname === '/photos'}>
            Photos
          </NavLink>
        </NavLinks>

        <ProfileSection>
          <NavLink to="/profile" active={location.pathname === '/profile'}>
            <ProfilePic>
              <img src="https://via.placeholder.com/40" alt="Profile" />
            </ProfilePic>
          </NavLink>
        </ProfileSection>
      </NavContent>
    </NavContainer>
  );
};

export default Navbar;
