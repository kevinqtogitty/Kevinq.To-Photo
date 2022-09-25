import { animated } from 'react-spring';
import styled from 'styled-components';

const Tooltip = styled(animated.li)`
  margin-top: 1rem;
  margin-left: 4.5rem;
  list-style: none;
  cursor: default;
  width: fit-content;
  padding: 5px;
  background-color: rgb(228, 228, 208);
  padding: 5px;
  box-shadow: 5px 5px 5px grey;
  border-radius: 6px;
`;

const AnimatedSubMenuLink = styled(animated.li)`
  width: fit-content;
  list-style: none;
  text-decoration: none;
`;

const Navigation = styled.nav`
  @media (max-width: 500px) {
    display: none;
  }
`;

export { Tooltip, AnimatedSubMenuLink, Navigation };
