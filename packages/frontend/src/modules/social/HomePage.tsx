import React from 'react';
import styled from 'styled-components';
import { FadeInText } from '~/shared/FadeInText';
import { Link } from 'react-router-dom';

const Container = styled.div`
  max-width: 1000px;
  margin: 20px auto;
  padding: 0 16px;
  display: grid;
  grid-template-columns: 360px 1fr;
  gap: 16px;
`;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const SidebarItem = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  text-decoration: none;
  color: inherit;

  &:hover {
    background: #e4e6eb;
  }
`;

const Icon = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #e4e6eb;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Feed = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const CreatePost = styled.div`
  background: white;
  border-radius: 8px;
  padding: 12px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

const PostInput = styled.div`
  display: flex;
  gap: 8px;
  padding: 8px;
  border-bottom: 1px solid #e4e6eb;
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

const Input = styled.div`
  flex: 1;
  background: #f0f2f5;
  border-radius: 20px;
  padding: 8px 12px;
  color: #65676b;
  cursor: pointer;

  &:hover {
    background: #e4e6eb;
  }
`;

const Post = styled.div`
  background: white;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

const PostHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
`;

const PostInfo = styled.div`
  h4 {
    margin: 0;
    font-size: 15px;
  }

  span {
    font-size: 13px;
    color: #65676b;
  }
`;

const HomePage: React.FC = () => {
  return (
    <Container>
      <Sidebar>
        <SidebarItem to="/profile">
          <Icon>👤</Icon>
          <FadeInText text="John Doe" />
        </SidebarItem>
        <SidebarItem to="/friends">
          <Icon>👥</Icon>
          <FadeInText text="Friends" />
        </SidebarItem>
        <SidebarItem to="/groups">
          <Icon>👥</Icon>
          <FadeInText text="Groups" />
        </SidebarItem>
        <SidebarItem to="/photos">
          <Icon>🎞️</Icon>
          <FadeInText text="Photos" />
        </SidebarItem>
        <SidebarItem to="/events">
          <Icon>📅</Icon>
          <FadeInText text="Events" />
        </SidebarItem>
      </Sidebar>

      <Feed>
        <CreatePost>
          <PostInput>
            <ProfilePic>
              <img src="https://via.placeholder.com/40" alt="Profile" />
            </ProfilePic>
            <Input>What&apos;s on your mind?</Input>
          </PostInput>
        </CreatePost>

        <Post>
          <PostHeader>
            <ProfilePic>
              <img src="https://via.placeholder.com/40" alt="Jane Smith" />
            </ProfilePic>
            <PostInfo>
              <h4>Jane Smith</h4>
              <span>2 hours ago</span>
            </PostInfo>
          </PostHeader>
          <p>Just launched my new website! Check it out 🚀</p>
        </Post>

        <Post>
          <PostHeader>
            <ProfilePic>
              <img src="https://via.placeholder.com/40" alt="Mike Johnson" />
            </ProfilePic>
            <PostInfo>
              <h4>Mike Johnson</h4>
              <span>5 hours ago</span>
            </PostInfo>
          </PostHeader>
          <p>Beautiful day for a hike! 🏔️</p>
        </Post>
      </Feed>
    </Container>
  );
};

export default HomePage;
