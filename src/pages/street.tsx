import type React from 'react';
import json from '../../db.json';
import { ImageContainer, Photo } from '../stylesheets/photo_container_styles';
import { useTrail } from 'react-spring';
import { useEffect, useState } from 'react';

const Street = () => {
  const [active, setActive] = useState(false);
  const imgUrls: string[] = json.photoGroups.street.map((item) => item.imgUrl);
  const config = {
    tension: 280,
    friction: 60
  };

  useEffect(() => {
    setActive(true);
  }, []);

  const trails = useTrail(imgUrls.length, {
    opacity: active ? 1 : 0,
    config
  });

  return (
    <ImageContainer className="streetPhotos" style={{ zIndex: -1 }}>
      {trails.map((animation, i) => (
        <Photo
          className="streetImage"
          src={imgUrls[i]}
          key={i}
          style={animation}
        />
      ))}
    </ImageContainer>
  );
};

export default Street;
