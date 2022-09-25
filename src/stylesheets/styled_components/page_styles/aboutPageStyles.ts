import styled from 'styled-components';
import { animated } from 'react-spring';

const MainWrapper = styled.div`
  margin-left: 21rem;
  align-items: flex-start;
  height: 100vh;
  justify-content: center;
  display: flex;
  column-gap: 1rem;
  @media (max-width: 500px) {
    margin-left: 0rem;
  }
`;

const AboutInfo = styled(animated.div)`
  padding: 1rem;
  margin-top: 10rem;
  background-color: rgba(228, 228, 208, 0.8);
  max-width: 35rem;
  height: fit-content;
  border: none;
  border-radius: 5px;
  z-index: -1;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  @media (max-width: 500px) {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    background: rgba(228, 228, 208, 0.8);
    margin-right: 0;
    width: 80vw;
    margin-bottom: 2rem;
    z-index: -1;
  }
`;

export { MainWrapper, AboutInfo };
