import type React from 'react';
import json from '../../db.json';
import { ImageContainer, Photo } from '../stylesheets/photo_container_styles';

const Street = () => {
  const data: string[] = json.photoGroups.street.map((item) => item.imgUrl);

  return (
    <ImageContainer className="streetPhotos" style={{ zIndex: -1 }}>
      {data.map((url, i) => (
        <Photo className="belowImage" src={url} key={i} />
      ))}
    </ImageContainer>
  );
};

export default Street;
