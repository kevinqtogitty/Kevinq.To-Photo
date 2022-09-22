import { animated } from 'react-spring';
import styled from 'styled-components';

/*---------------------------------------------------------------*/

const ImageContainer = styled.div`
  row-gap: 2rem;
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  margin-left: 21rem;
  padding-top: 8.2rem;
  padding-bottom: 1rem;
  @media (max-width: 500px) {
    margin-left: 0rem;
    row-gap: 1rem;
  }

  &.below {
    margin-left: 0rem;
  }

  &.growingUpAssala {
    margin-left: 0rem;
  }
`;

const Photo = styled(animated.img)`
  height: auto;
  width: 30rem;
  border-radius: 5px;
  animation: fadein 2000ms;
  align-self: center;
  z-index: -1;
  @media (max-width: 500px) {
    max-width: 100vw;
    border-radius: 0px;
  }

  &.aboutPhoto {
    @media (max-width: 500px) {
      display: none;
    }
  }
`;

export { ImageContainer, Photo };
