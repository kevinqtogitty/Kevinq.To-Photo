import type React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { useTransition, animated } from 'react-spring';
import { LI, UL } from '../stylesheets/navigation_styles';
import { Link } from 'react-router-dom';
import '../stylesheets/router.css';

const Hamburger: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [subMenuIsActive, setSubMenuIsActive] = useState(false);

  const menuTransitions = useTransition(isActive, {
    from: { opacity: 0, transform: 'translateX(100%)' },
    enter: { opacity: 1, transform: 'translateX(0%)' },
    leave: { opacity: 0, transform: 'translateX(100%)' }
  });

  const subMenuTransitions = useTransition(subMenuIsActive, {
    from: { opacity: 0, transform: 'translateY(-100%)' },
    enter: { opacity: 1, transform: 'translateY(0%)' },
    leave: { opacity: 0, transform: 'translateY(-100%)' }
  });

  const subMenu: JSX.Element = (
    <UL className="projectsMenu">
      <Link to={'/growingUp'} className="projectsLink">
        <LI
          className="hamburgerSubLink"
          onClick={() => setIsActive((isActive) => !isActive)}
        >
          Growing Up Assala
        </LI>
      </Link>
      <Link
        to={'/onTheRoad'}
        className="projectsLink"
        onClick={() => setIsActive((isActive) => !isActive)}
      >
        <LI className="hamburgerSubLink">OTRATEOTW </LI>
      </Link>
      <Link to={'/below'} className="projectsLink">
        <LI
          className="hamburgerSubLink"
          onClick={() => setIsActive((isActive) => !isActive)}
        >
          Below
        </LI>
      </Link>
    </UL>
  );

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const menu: JSX.Element = (
    <>
      <MenuMask onClick={() => setIsActive(false)}></MenuMask>

      <Menu id="menu">
        <UL className="mobileMenu">
          <Link to={'/'} className="projectsLink">
            <LI
              className="hamburgerLink"
              onClick={() => setIsActive((isActive) => !isActive)}
            >
              Home
            </LI>
          </Link>
          <Link to={'/street'} className="projectsLink">
            <LI
              className="hamburgerLink"
              onClick={() => setIsActive((isActive) => !isActive)}
            >
              Street{' '}
            </LI>
          </Link>
          <Link to={'/landscapes'} className="projectsLink">
            <LI
              className="hamburgerLink"
              onClick={() => setIsActive((isActive) => !isActive)}
            >
              Landscapes
            </LI>
          </Link>
          <LI
            onClick={() =>
              setSubMenuIsActive((subMenuIsActive) => !subMenuIsActive)
            }
          >
            <LI className="hamburgerLink">
              Projects
              <UL className="projectsMenu">
                {subMenuTransitions(
                  (styles, item) =>
                    item && (
                      <animated.div style={styles}>{subMenu}</animated.div>
                    )
                )}
              </UL>
            </LI>
          </LI>
          <div style={{ marginTop: '15.6rem', position: 'fixed' }}>
            <Link to={'/store'} className="projectsLink">
              <LI
                className="hamburgerLink"
                onClick={() => setIsActive((isActive) => !isActive)}
              >
                Store
              </LI>
            </Link>
            <Link to={'/about'} className="projectsLink">
              <LI
                className="hamburgerLink"
                onClick={() => setIsActive((isActive) => !isActive)}
              >
                About
              </LI>
            </Link>
            <Link to={'/contact'} className="projectsLink">
              <LI
                className="hamburgerLink"
                onClick={() => setIsActive((isActive) => !isActive)}
              >
                Contact
              </LI>
            </Link>
          </div>
        </UL>
      </Menu>
    </>
  );

  return (
    <nav role="navigation">
      <MenuToggleButton onClick={() => setIsActive((isActive) => !isActive)}>
        <Burger
          src={isActive ? '/icons/cross.svg' : '/icons/menu-burger.svg'}
        />
      </MenuToggleButton>
      {menuTransitions(
        (styles, item) =>
          item && <animated.div style={styles}>{menu}</animated.div>
      )}
    </nav>
  );
};

const MenuToggleButton = styled.button`
  display: none;
  @media (max-width: 500px) {
    position: relative;
    /* z-index: 5; */
    border: none;
    background-color: rgba(0, 0, 0, 0);
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 1.2rem;
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

export default Hamburger;
