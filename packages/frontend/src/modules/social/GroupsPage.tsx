import React from 'react';
import styled from 'styled-components';
import { FadeInText } from '~/shared/FadeInText';

const Container = styled.div`
  max-width: 1000px;
  margin: 20px auto;
  padding: 0 16px;
`;

const Header = styled.div`
  margin-bottom: 24px;
  h1 {
    font-size: 24px;
    margin: 0;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
`;

const GroupCard = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

const CoverImage = styled.div`
  height: 150px;
  background: linear-gradient(45deg, #1877f2, #0099ff);
  position: relative;
`;

const GroupIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  background: white;
  position: absolute;
  bottom: -20px;
  left: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CardContent = styled.div`
  padding: 32px 16px 16px;
`;

const GroupName = styled.h3`
  margin: 0 0 4px;
  font-size: 17px;
`;

const GroupInfo = styled.div`
  font-size: 13px;
  color: #65676b;
  margin-bottom: 16px;
`;

const Button = styled.button<{ primary?: boolean }>`
  width: 100%;
  padding: 8px;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  background: ${(props) => (props.primary ? '#1877f2' : '#e4e6eb')};
  color: ${(props) => (props.primary ? 'white' : '#050505')};

  &:hover {
    background: ${(props) => (props.primary ? '#166fe5' : '#d8dadf')};
  }
`;

const GroupsPage: React.FC = () => {
  return (
    <Container>
      <Header>
        <FadeInText text="Your Groups" />
      </Header>

      <Grid>
        {[1, 2, 3].map((i) => (
          <GroupCard key={i}>
            <CoverImage>
              <GroupIcon>👥</GroupIcon>
            </CoverImage>
            <CardContent>
              <GroupName>
                <FadeInText
                  text={`Tech Enthusiasts ${i}`}
                  delayBetweenChars={0.03}
                />
              </GroupName>
              <GroupInfo>Private Group • 15.2K members</GroupInfo>
              <Button>View Group</Button>
            </CardContent>
          </GroupCard>
        ))}
      </Grid>

      <Header style={{ marginTop: '32px' }}>
        <FadeInText text="Suggested Groups" />
      </Header>

      <Grid>
        {[4, 5, 6].map((i) => (
          <GroupCard key={i}>
            <CoverImage>
              <GroupIcon>🌟</GroupIcon>
            </CoverImage>
            <CardContent>
              <GroupName>
                <FadeInText
                  text={`Photography Club ${i}`}
                  delayBetweenChars={0.03}
                />
              </GroupName>
              <GroupInfo>Public Group • 8.5K members</GroupInfo>
              <Button primary>Join Group</Button>
            </CardContent>
          </GroupCard>
        ))}
      </Grid>
    </Container>
  );
};

export default GroupsPage;
