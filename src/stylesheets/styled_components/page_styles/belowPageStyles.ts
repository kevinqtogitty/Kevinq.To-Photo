import styled from 'styled-components';

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

export { MainWrapper, ProjectInfo };
