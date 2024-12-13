import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 3rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.7) 50%, rgba(0, 0, 0, 0) 100%);
  backdrop-filter: blur(10px);
`;

const LogoText = styled.span`
  &.octobit {
    color: #FF0033;
  }
  
  &.club {
    color: #fff;
  }
`;

const Logo = styled(Link)`
  text-decoration: none;
  font-weight: 900;
  font-size: 1.2rem;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  display: flex;

  &:hover {
    transform: translateY(-1px);
    
    .octobit {
      color: #ff1f4d;
    }
    
    .club {
      color: rgba(255, 255, 255, 0.9);
    }
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 3rem;
`;

const NavLink = styled(Link)`
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  padding: 0.5rem 0;
  transition: all 0.3s ease;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #FF0033;
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: #fff;
    &:after {
      width: 100%;
    }
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Logo to="/">
        <LogoText className="octobit">OCTOBIT</LogoText>
        <LogoText className="club">CLUB</LogoText>
      </Logo>
      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/story">The Story</NavLink>
        <NavLink to="/challenges">Challenges</NavLink>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;