import React, { useEffect, useState } from 'react';
import json from '../../db.json';
import { Photo } from '../stylesheets/styled_components/component_styles/photoStyles';
import {
  IndividualCard,
  InfoCard,
  MainWrapper,
  PhotoStackWrapper,
  ProjectInfo,
  ProjectInfoWrapper,
  TitleAndLocation
} from '../stylesheets/styled_components/page_styles/onTheRoadStyles';

interface JsonData {
  [key: string]: {
    imgUrl: string;
    location?: string;
    title?: string;
    description?: string;
  };
}

const OnTheRoad: React.FC = () => {
  const imgUrls: JsonData[] = json.photoGroups.road.map((url: any) => url);

  return (
    <>
      <MainWrapper>
        <ProjectInfoWrapper>
          <ProjectInfo>
            <h1>On the road at the end of the world</h1>
            <h2>MARCH 2022 - APRIL 2020</h2>
            <br />
            In the midst of coronavirus, I rented a car and jumped on the road.
            From the American Southwest to the coast of California and back.
            From big cities to podunk towns. I experienced the quintessential
            American road trip, all while the world was in the throws of a
            pandemic. These are the portraits and stories of the people who I
            encountered along the way.
          </ProjectInfo>
        </ProjectInfoWrapper>
        <PhotoStackWrapper>
          {imgUrls.map((image, i) => (
            <IndividualCard key={i}>
              <Photo src={`${image.imgUrl}`} key={i} className="onTheRoad" />
              <InfoCard>
                <TitleAndLocation>
                  {`${image.title}`} - {`${image.location}`}
                </TitleAndLocation>
                <br />
                <br />
                {`${image.description}`}
              </InfoCard>
            </IndividualCard>
          ))}
        </PhotoStackWrapper>
      </MainWrapper>
    </>
  );
};

export default OnTheRoad;
