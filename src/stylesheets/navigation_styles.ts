import styled from 'styled-components';
import { animated } from 'react-spring';

const Navigation = styled.nav`
  @media (max-width: 500px) {
    display: none;
  }
`;

const LI = styled.li`
  list-style: none;
  cursor: pointer;
  &.hamburgerLink {
    font-size: 2rem;
  }
  &.hamburgerSubLink {
    font-size: 1.5rem;
  }
  &.projectsLink {
    font-size: 1rem;
  }
  &.tooltip {
    cursor: default;
  }
  &.hamburgerLink {
    font-size: 2rem;
  }
`;

const UL = styled.ul`
  display: flex;
  flex-direction: column;
  width: fit-content;
  list-style: none;
  &.desktopMenu,
  &.emailInfo {
    margin-left: -1rem;
    row-gap: 0.5rem;
    font-size: 1.2rem;
  }
  &.emailInfo {
    position: absolute;
    top: 35rem;
  }
  &.projectsMenu {
    padding-left: 2rem;
  }
  &.projectsMenuDesktop {
    width: 12rem;
    padding: 0.6rem;
    position: fixed;
    top: -12rem;
    background-color: rgb(228, 228, 208);
    border-radius: 6px;
    box-shadow: 5px 5px 5px grey;
    row-gap: 0.2rem;
  }
  &.mobileMenu {
    padding: 0px;
  }
`;

export { Navigation, LI, UL };
