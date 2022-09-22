import type React from 'react';
import json from '../../db.json';
import { ImageContainer, Photo } from '../stylesheets/photo_container_styles';
import { useTrail } from 'react-spring';
import { useEffect, useState } from 'react';

const Home = () => {
  const [active, setActive] = useState(false);
  const imgUrls = json.photoGroups.homepage.map((item) => item.imgUrl);
  const config = {
    tension: 280,
    friction: 60
  };

  useEffect(() => {
    setActive(true);
  }, []);

  const trails = useTrail(imgUrls.length, {
    opacity: active ? 1 : 0,
    transform: active ? 'translateY(0%)' : 'translateY(0%)',
    config
  });

  return (
    <ImageContainer className="homepage">
      {trails.map((animation, i) => (
        <Photo src={imgUrls[i]} key={i} style={animation} />
      ))}
    </ImageContainer>
  );
};

export default Home;
