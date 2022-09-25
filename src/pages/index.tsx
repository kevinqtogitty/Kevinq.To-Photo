import type React from 'react';
import json from '../../db.json';
import {
  ImageContainer,
  Photo
} from '../stylesheets/styled_components/component_styles/photoStyles';

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
