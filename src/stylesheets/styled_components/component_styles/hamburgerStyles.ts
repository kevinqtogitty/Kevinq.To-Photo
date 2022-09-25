import styled from 'styled-components';

const MenuToggleButton = styled.button`
  display: none;
  @media (max-width: 500px) {
    position: relative;
    border: none;
    background-color: rgba(0, 0, 0, 0);
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: -2rem;
  }
`;

const MenuMask = styled.div`
  display: none;
  position: fixed;
  top: -5rem;
  height: 2000px;
  width: 1000px;
  background-color: rgba(0, 0, 0, 0.7);
  left: -30rem;
  @media (max-width: 500px) {
    display: fixed;
  }
`;

const Burger = styled.img`
  display: none;
  z-index: 6;
  @media (max-width: 500px) {
    display: block;
    height: 2rem;
    width: auto;
    cursor: pointer;
  }
`;

const Menu = styled.ul`
  display: none;
  position: absolute;
  left: -25rem;
  width: 100vw;
  margin: -4rem 0rem 0rem 10rem;
  height: 100vh;
  padding: 1rem;
  padding-top: 6rem;
  background: rgba(255, 255, 255, 0.95);
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  /* to stop flickering of text in safari */
  @media (max-width: 500px) {
    display: block;
  }
`;

export { MenuToggleButton, Menu, MenuMask, Burger };
