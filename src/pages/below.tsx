import type React from 'react';
import json from '../../db.json';
import { ImageContainer, Photo } from '../stylesheets/photo_container_styles';
import { useState } from 'react';
import styled from 'styled-components';

const Below = () => {
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

const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: fit-content;
  margin-left: 21rem;
  width: calc(100vw - 21rem);
  @media (max-width: 500px) {
    margin-left: 0rem;
    row-gap: 0rem;
    top: 7rem;
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
    margin-top: 7.3rem;
    margin-bottom: -6rem;
    margin-right: 0;
    width: 80vw;
  }
`;
