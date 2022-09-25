import type React from 'react';
import json from '../../db.json';
import {
  ImageContainer,
  Photo
} from '../stylesheets/styled_components/component_styles/photoStyles';
import {
  MainWrapper,
  ProjectInfo
} from '../stylesheets/styled_components/page_styles/growingUpAssalaStyles';

const GrowingUpAssala: React.FC = () => {
  const data: string[] = json.photoGroups.growingUpAssala.map(
    (item) => item.imgUrl
  );

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
        {data.map((url, i) => (
          <Photo src={url} key={i} />
        ))}
      </ImageContainer>
    </MainWrapper>
  );
};

export default GrowingUpAssala;
