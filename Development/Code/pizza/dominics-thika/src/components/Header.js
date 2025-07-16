import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FaPizzaSlice, FaBars, FaTimes, FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const HeaderContainer = styled.header`
  background: linear-gradient(135deg, #d4af37 0%, #ff6b35 100%);
  padding: 1rem 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
  font-size: 1.8rem;
  font-weight: bold;
  
  svg {
    margin-right: 0.5rem;
    font-size: 2rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
  
  &.active {
    background: rgba(255, 255, 255, 0.3);
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  display: ${props => props.isOpen ? 'flex' : 'none'};
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: linear-gradient(135deg, #d4af37 0%, #ff6b35 100%);
  padding: 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
  }
`;

const MobileNavLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: 500;
  padding: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const CartButton = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
  
  svg {
    margin-right: 0.5rem;
  }
`;

const CartBadge = styled.span`
  position: absolute;
  top: -5px;
  right: -5px;
  background: #e74c3c;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: bold;
`;

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { getCartCount } = useCart();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <HeaderContainer>
      <Nav>
        <Logo to="/" onClick={closeMobileMenu}>
          <FaPizzaSlice />
          Dominics Thika
        </Logo>
        
        <NavLinks>
          <NavLink to="/" className={isActive('/') ? 'active' : ''}>
            Home
          </NavLink>
          <NavLink to="/menu" className={isActive('/menu') ? 'active' : ''}>
            Menu
          </NavLink>
          <NavLink to="/about" className={isActive('/about') ? 'active' : ''}>
            About
          </NavLink>
          <NavLink to="/contact" className={isActive('/contact') ? 'active' : ''}>
            Contact
          </NavLink>
          <CartButton to="/order" className={isActive('/order') ? 'active' : ''}>
            <FaShoppingCart />
            Cart
            {getCartCount() > 0 && <CartBadge>{getCartCount()}</CartBadge>}
          </CartButton>
        </NavLinks>
        
        <MobileMenuButton onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuButton>
      </Nav>
      
      <MobileMenu isOpen={isMobileMenuOpen}>
        <MobileNavLink to="/" onClick={closeMobileMenu}>
          Home
        </MobileNavLink>
        <MobileNavLink to="/menu" onClick={closeMobileMenu}>
          Menu
        </MobileNavLink>
        <MobileNavLink to="/about" onClick={closeMobileMenu}>
          About
        </MobileNavLink>
        <MobileNavLink to="/contact" onClick={closeMobileMenu}>
          Contact
        </MobileNavLink>
        <MobileNavLink to="/order" onClick={closeMobileMenu}>
          Cart ({getCartCount()})
        </MobileNavLink>
      </MobileMenu>
    </HeaderContainer>
  );
};

export default Header; 