import type React from 'react';
import json from '../../db.json';
import { ImageContainer, Photo } from '../stylesheets/photo_container_styles';

const Landscapes = () => {
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
