import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.8) 100%);
  backdrop-filter: blur(10px);
  padding: 1rem 2rem;
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  text-decoration: none;
  letter-spacing: 1px;
  
  span {
    color: #FF0033;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 3rem;
`;

const NavLink = styled(Link)`
  position: relative;
  color: ${props => props.$isActive ? '#fff' : 'rgba(255, 255, 255, 0.7)'};
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  padding: 0.5rem 0;
  transition: color 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${props => props.$isActive ? '100%' : '0'};
    height: 2px;
    background: linear-gradient(90deg, #FF0033, #FF3366);
    transition: width 0.3s ease;
  }

  &:hover {
    color: #fff;
    
    &::after {
      width: 100%;
    }
  }
`;

const NavBar = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/story', label: 'The Story' },
    { path: '/challenges', label: 'Challenges' }
  ];

  return (
    <HeaderContainer>
      <Nav>
        <Logo to="/">
          <span>OCTO</span>BIT
        </Logo>
        <NavLinks>
          {navItems.map(item => (
            <NavLink
              key={item.path}
              to={item.path}
              $isActive={location.pathname === item.path}
            >
              {item.label}
            </NavLink>
          ))}
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
};

export default NavBar;