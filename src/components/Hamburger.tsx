import type React from 'react';
import { useState } from 'react';
import { useTransition, animated } from 'react-spring';
import { LI, UL } from '../stylesheets/globalReUsedComponents';
import { Link } from 'react-router-dom';
import '../stylesheets/plain_stylesheets/router.css';
import {
  MenuMask,
  Menu,
  MenuToggleButton,
  Burger
} from '../stylesheets/styled_components/component_styles/hamburgerStyles';

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

export default Hamburger;
