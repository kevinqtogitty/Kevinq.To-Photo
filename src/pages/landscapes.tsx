import type React from 'react';
import json from '../../db.json';
import {
  ImageContainer,
  Photo
} from '../stylesheets/styled_components/component_styles/photoStyles';

const Landscapes: React.FC = () => {
  const data = json.photoGroups.landscapes.map((item) => item.imgUrl);

  return (
    <ImageContainer className="landscapes">
      {data.map((url, i) => (
        <Photo src={url} key={i} />
      ))}
    </ImageContainer>
  );
};

export default Landscapes;
