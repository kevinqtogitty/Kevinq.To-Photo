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

/*---------------------------------------------------------------*/

interface Header1Props {
  margin?: string;
  padding?: string;
  fontSize?: string;
}
const Header1 = styled.h1<Header1Props>`
  margin-left: 1rem;
  padding: ${(props) => props.padding || '0rem 0rem 0rem 0rem'};
  font-size: ${(props) => props.fontSize || '1rem'};
  @media (max-width: 500px) {
    font-size: 1.5rem;
    margin: 0rem;
    padding: 1rem;
  }
`;

export { FlexWrapper, Header1 };
