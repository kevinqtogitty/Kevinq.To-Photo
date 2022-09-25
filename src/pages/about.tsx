import type React from 'react';
import { Photo } from '../stylesheets/styled_components/component_styles/photoStyles';
import { useSpring, config } from 'react-spring';
import {
  AboutInfo,
  MainWrapper
} from '../stylesheets/styled_components/page_styles/aboutPageStyles';

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
