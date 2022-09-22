import type React from 'react';
import json from '../../db.json';
import { ImageContainer, Photo } from '../stylesheets/photo_container_styles';

const Home = () => {
  const data = json.photoGroups.homepage.map((item) => item.imgUrl);

  return (
    <ImageContainer className="homepage">
      {data.map((url, i) => (
        <Photo className="belowImage" src={url} key={i} />
      ))}
    </ImageContainer>
  );
};

export default Home;
