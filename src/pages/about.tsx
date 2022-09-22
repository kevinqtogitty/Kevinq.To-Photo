import type React from 'react';
import { Photo } from '../stylesheets/photo_container_styles';
import { useSpring, animated, config } from 'react-spring';
import styled from 'styled-components';

const AboutMe = () => {
  const animation = useSpring({
    loop: false,
    from: { opacity: 0, transform: 'translateY(-100%)' },
    to: { opacity: 1, transform: 'translateY(0%)' },
    config: config.molasses
  });

  const photoAnimation = useSpring({
    loop: false,
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: config.molasses
  });
  return (
    <MainWrapper>
      <Photo
        src={'/projects/random/0009437_0009437-R1-075-36-min.jpg'}
        style={photoAnimation}
        className="aboutPhoto"
      />
      <AboutInfo style={animation}>
        <div style={{ lineHeight: '1.5em' }}>
          <h1>About</h1>
          <p>
            {' '}
            Documenting the relationship between places in the midst of change
            and the people that inhabit them. Working in both the digital and
            film, color and black and white, my images are made and presented in
            the method best suited towards the project I am currently working
            on. With a clear story and narrative I want to present, I take off
            by car, feet, or plane. But always allowing my curiosity and
            instinct to take me off towards interesting sights and sounds.
          </p>
          <br />
          Favorites:
          <br />
          Whiskey sours, fast walkers, the band &apos;Everything but the
          Girl&apos;
        </div>
      </AboutInfo>
    </MainWrapper>
  );
};

export default AboutMe;

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
