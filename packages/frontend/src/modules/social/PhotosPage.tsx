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
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
`;

const PhotoCard = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.02);
  }
`;

const PhotoContainer = styled.div`
  position: relative;
  padding-bottom: 100%;
  background: #f0f2f5;
`;

const Photo = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const PhotoInfo = styled.div`
  padding: 12px;
`;

const AlbumTitle = styled.h3`
  margin: 0;
  font-size: 15px;
`;

const PhotoCount = styled.span`
  font-size: 13px;
  color: #65676b;
`;

const UploadButton = styled.button`
  background: #1877f2;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 8px 16px;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 24px;

  &:hover {
    background: #166fe5;
  }
`;

const PhotosPage: React.FC = () => {
  return (
    <Container>
      <Header>
        <FadeInText text="Your Photos" />
      </Header>

      <UploadButton>Upload Photos</UploadButton>

      <Header>
        <FadeInText text="Albums" />
      </Header>

      <Grid>
        {[1, 2, 3, 4].map((i) => (
          <PhotoCard key={i}>
            <PhotoContainer>
              <Photo
                src={`https://via.placeholder.com/200?text=Album${i}`}
                alt={`Album ${i}`}
              />
            </PhotoContainer>
            <PhotoInfo>
              <AlbumTitle>
                <FadeInText
                  text={`Vacation ${2024 - i}`}
                  delayBetweenChars={0.03}
                />
              </AlbumTitle>
              <PhotoCount>
                {Math.floor(Math.random() * 50 + 10)} photos
              </PhotoCount>
            </PhotoInfo>
          </PhotoCard>
        ))}
      </Grid>

      <Header style={{ marginTop: '32px' }}>
        <FadeInText text="Recent Photos" />
      </Header>

      <Grid>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <PhotoCard key={i}>
            <PhotoContainer>
              <Photo
                src={`https://via.placeholder.com/200?text=Photo${i}`}
                alt={`Recent Photo ${i}`}
              />
            </PhotoContainer>
          </PhotoCard>
        ))}
      </Grid>
    </Container>
  );
};

export default PhotosPage;
