import type React from 'react';
import json from '../../db.json';
import {
  ImageContainer,
  Photo
} from '../stylesheets/styled_components/component_styles/photoStyles';
import {
  MainWrapper,
  ProjectInfo
} from '../stylesheets/styled_components/page_styles/belowPageStyles';

const Below: React.FC = () => {
  const data: string[] = json.photoGroups.below.map((item) => item.imgUrl);

  return (
    <MainWrapper>
      <ProjectInfo>
        <h1>BELOW</h1>
        <h2>2017 - ONGOING</h2>
        <br />
        <p>
          My least favorite place on the planet. Washington DC&apos;s brutalist
          metro.
          <br />
          Dark, cold, and always late.
          <br />
          <br />
          These photographs are taken over the years as I come back to visit my
          hometown, the DC metro area.
        </p>
      </ProjectInfo>
      <ImageContainer className="below">
        {data.map((url, i) => (
          <Photo className="belowImage" src={url} key={i} />
        ))}
      </ImageContainer>
    </MainWrapper>
  );
};

export default Below;
