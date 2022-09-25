import styled from 'styled-components';

interface FlexWrapperProps {
  display?: string;
  flexDirection?: string;
  flexWrap?: string;
  rowGap?: string;
  columnGap?: string;
  justify?: string;
  align?: string;
  width?: string;
  height?: string;
  position?: string;
  margin?: string;
}

const FlexWrapper = styled.div<FlexWrapperProps>`
  display: ${(props) => props.display || 'flex'};
  flex-direction: ${(props) => props.flexDirection || 'row'};
  flex-wrap: ${(props) => props.flexWrap || 'wrap'};
  row-gap: ${(props) => props.rowGap || '1rem'};
  column-gap: ${(props) => props.columnGap || '1rem'};
  justify-content: ${(props) => props.justify || 'center'};
  align-items: ${(props) => props.align || 'center'};
  width: ${(props) => props.width || 'fit-content'};
  height: ${(props) => props.height || 'fit-content'};
  position: ${(props) => props.position || 'relative'};
  margin: ${(props) => props.margin || '0, 0, 0, 0'};
  & .navigationAndPhotos {
    @media (max-width: 500px) {
      flex-direction: column;
    }
  }
  & .headerAndNavigation {
    @media (max-width: 550px) {
      position: absolute;
      width: 100%;
    }
  }
  &.landscapes {
    margin-left: 21rem;
    @media (max-width: 500px) {
      margin-left: 0rem;
      margin-top: 20rem;
    }
  }
  &.onTheRoad {
    width: 100%;
    margin-top: 5rem;
    margin-left: 21rem;
    padding-left: 15rem;
    @media (max-width: 500px) {
      margin-left: 0rem;
      padding-left: 0rem;
    }
  }
  &.roadDescription {
    @media (max-width: 500px) {
      width: 100vw;
    }
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

export { FlexWrapper, UL, LI };
