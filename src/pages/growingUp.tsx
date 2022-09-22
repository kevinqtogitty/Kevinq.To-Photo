import type React from 'react';
import json from '../../db.json';
import { ImageContainer, Photo } from '../stylesheets/photo_container_styles';
import { useTrail } from 'react-spring';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const GrowingUpAssala = () => {
  const [active, setActive] = useState(false);
  const imgUrls: string[] = json.photoGroups.growingUpAssala.map(
    (item) => item.imgUrl
  );

  useEffect(() => {
    setActive(true);
  }, []);

  const trails = useTrail(imgUrls.length, {
    opacity: active ? 1 : 0
  });

  return (
    <MainWrapper>
      <ProjectInfo>
        <h1>Growing up Assala</h1>
        <h2>NOVEMBER 2021 - ONGOING</h2>
        <br />
        <p>
          Situated along the southeastern coast of the Sinai Peninsula, Dahab
          itself was once a small Bedouin fishing village. Renowned for it’s
          incredible dive sites and cheap living, it has long attracted sun
          chasers from all over the world, from competitive free divers to
          new-age hippies. As the word gets out about Dahab and slips into the
          ears of digital nomads and adventurers around the globe, eventually
          these scenes and streets may not be recognizable. And for some, it
          already isn’t.
          <br /> <br />
          “Growing Up Assala” is a portrait of daily life in Dahabs residential
          neighborhood, El Assala. It is an exploration of the relationship
          between the people who live/work there and their surroundings. A study
          of how architecture, animals, humans, and technology uniquely converge
          in this changing neighborhood creating an atmosphere of excitement,
          joy, and a bit of strangeness.
        </p>
      </ProjectInfo>
      <ImageContainer className="growingUpAssala">
        {trails.map((animation, i) => (
          <Photo src={imgUrls[i]} key={i} style={animation} />
        ))}
      </ImageContainer>
    </MainWrapper>
  );
};

export default GrowingUpAssala;

const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: fit-content;
  margin-left: 21rem;
  width: calc(100vw - 21rem);
  @media (max-width: 500px) {
    margin-left: 0rem;
    position: absolute;
    top: 5rem;
    width: 100vw;
    z-index: -1;
    row-gap: 1rem;
  }
`;

const ProjectInfo = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  background-color: rgba(228, 228, 208, 0.7);
  max-width: 60rem;
  height: fit-content;
  border: none;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  @media (max-width: 500px) {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    margin-right: 0;
    width: 80vw;
  }
`;
