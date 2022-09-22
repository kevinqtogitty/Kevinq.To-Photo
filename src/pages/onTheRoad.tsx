import React, { useEffect, useState } from 'react';
import json from '../../db.json';
import { Photo } from '../stylesheets/photo_container_styles';
import styled from 'styled-components';
import { animated, useTrail } from 'react-spring';

interface JsonData {
  [key: string]: {
    imgUrl: string;
    location?: string;
    title?: string;
    description?: string;
  };
}

const OnTheRoad = () => {
  const imgUrls: JsonData[] = json.photoGroups.road.map((url: any) => url);
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(true);
  }, []);

  const config = {
    tension: 280,
    friction: 60
  };

  const trails = useTrail(imgUrls.length, {
    opacity: active ? 1 : 0,
    config
  });

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
          {trails.map((animation, i) => (
            <IndividualCard key={i}>
              <Photo
                src={`${imgUrls[i].imgUrl}`}
                key={i}
                className="onTheRoad"
                style={animation}
              />
              <InfoCard style={animation}>
                <TitleAndLocation>
                  {`${imgUrls[i].title}`} - {`${imgUrls[i].location}`}
                </TitleAndLocation>
                <br />
                <br />
                {`${imgUrls[i].description}`}
              </InfoCard>
            </IndividualCard>
          ))}
        </PhotoStackWrapper>
      </MainWrapper>
    </>
  );
};

export default OnTheRoad;

const PhotoStackWrapper = styled.div`
  width: 100%;
  overflow: auto;
  display: flex;
  align-items: center;
  ::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const IndividualCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: fit-content;
  @media (max-width: 500x) {
    height: fit-content;
  }
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100vw - 18rem);
  margin-left: 16.4rem;
  position: absolute;
  @media (max-width: 500px) {
    justify-content: center;
    align-items: center;
    margin-left: 0rem;
    width: 100vw;
    z-index: -1;
    top: 5rem;
  }
`;

const InfoCard = styled(animated.div)`
  padding: 1rem;
  margin-top: -3rem;
  margin-right: 20rem;
  background-color: rgba(228, 228, 208, 0.8);
  width: 30rem;
  height: fit-content;
  border: none;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  align-self: center;
  @media (max-width: 500px) {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    background: rgba(255, 255, 255, 0.8);
    margin-right: 0;
    width: 80vw;
    margin-bottom: 2rem;
  }
`;

const ProjectInfo = styled.div`
  margin-top: 2rem;
  margin-left: 20rem;
  padding: 1rem;
  background-color: rgba(228, 228, 208, 0.7);
  max-width: 40rem;
  height: fit-content;
  border: none;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  @media (max-width: 500px) {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    margin-left: 1rem;
    margin-right: 1rem;
    max-width: 100vw;
    margin-bottom: 2.3rem;
    align-self: center;
  }
`;

const ProjectInfoWrapper = styled.div`
  width: 100%;
  display: flex;
`;

const TitleAndLocation = styled.div`
  padding: 1rem;
  background: rgba(255, 255, 255, 1);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  border-radius: 5px;
  width: fit-content;
  z-index: 2;
`;
