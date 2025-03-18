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
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
`;

const FriendCard = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

const CoverImage = styled.div`
  height: 100px;
  background: linear-gradient(to right, #1877f2, #0099ff);
`;

const CardContent = styled.div`
  padding: 16px;
  text-align: center;
`;

const ProfileImage = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 4px solid white;
  margin: -60px auto 12px;
  overflow: hidden;
  background: #e4e6eb;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Name = styled.h3`
  margin: 0 0 8px;
  font-size: 17px;
`;

const MutualFriends = styled.div`
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
  margin-bottom: 8px;

  &:hover {
    background: ${(props) => (props.primary ? '#166fe5' : '#d8dadf')};
  }
`;

const FriendsPage: React.FC = () => {
  return (
    <Container>
      <Header>
        <FadeInText text="Friend Requests" />
      </Header>

      <Grid>
        {[1, 2, 3, 4].map((i) => (
          <FriendCard key={i}>
            <CoverImage />
            <CardContent>
              <ProfileImage>
                <img
                  src={`https://via.placeholder.com/120?text=Friend${i}`}
                  alt={`Friend ${i}`}
                />
              </ProfileImage>
              <Name>
                <FadeInText
                  text={`Sarah Wilson ${i}`}
                  delayBetweenChars={0.03}
                />
              </Name>
              <MutualFriends>8 mutual friends</MutualFriends>
              <Button primary>Confirm</Button>
              <Button>Delete</Button>
            </CardContent>
          </FriendCard>
        ))}
      </Grid>

      <Header style={{ marginTop: '32px' }}>
        <FadeInText text="People You May Know" />
      </Header>

      <Grid>
        {[5, 6, 7, 8].map((i) => (
          <FriendCard key={i}>
            <CoverImage />
            <CardContent>
              <ProfileImage>
                <img
                  src={`https://via.placeholder.com/120?text=Suggestion${i}`}
                  alt={`Suggestion ${i}`}
                />
              </ProfileImage>
              <Name>
                <FadeInText
                  text={`Alex Thompson ${i}`}
                  delayBetweenChars={0.03}
                />
              </Name>
              <MutualFriends>3 mutual friends</MutualFriends>
              <Button primary>Add Friend</Button>
              <Button>Remove</Button>
            </CardContent>
          </FriendCard>
        ))}
      </Grid>
    </Container>
  );
};

export default FriendsPage;
