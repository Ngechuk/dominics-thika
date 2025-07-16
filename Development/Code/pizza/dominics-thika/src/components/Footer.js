import React from 'react';
import styled from 'styled-components';
import { FaPizzaSlice, FaPhone, FaMapMarkerAlt, FaClock, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  background: #2c3e50;
  color: white;
  padding: 3rem 2rem 1rem;
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

const FooterSection = styled.div`
  h3 {
    color: #ff6b35;
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }
  
  p {
    margin-bottom: 0.5rem;
    line-height: 1.6;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  
  svg {
    margin-right: 0.5rem;
    color: #ff6b35;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  color: white;
  font-size: 1.5rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #ff6b35;
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid #34495e;
  padding-top: 1rem;
  text-align: center;
  color: #bdc3c7;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  
  svg {
    margin-right: 0.5rem;
    color: #ff6b35;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <Logo>
            <FaPizzaSlice />
            Dominics Thika
          </Logo>
          <p>
            Serving the finest pizzas in Thika since 2010. 
            Fresh ingredients, authentic recipes, and unforgettable taste.
          </p>
          <SocialLinks>
            <SocialLink href="#" aria-label="Facebook">
              <FaFacebook />
            </SocialLink>
            <SocialLink href="#" aria-label="Instagram">
              <FaInstagram />
            </SocialLink>
            <SocialLink href="#" aria-label="Twitter">
              <FaTwitter />
            </SocialLink>
          </SocialLinks>
        </FooterSection>
        
        <FooterSection>
          <h3>Contact Info</h3>
          <ContactInfo>
            <FaPhone />
            <span>+254 700 123 456</span>
          </ContactInfo>
          <ContactInfo>
            <FaMapMarkerAlt />
            <span>123 Pizza Street, Thika Town</span>
          </ContactInfo>
          <ContactInfo>
            <FaClock />
            <span>Mon-Sun: 10:00 AM - 10:00 PM</span>
          </ContactInfo>
        </FooterSection>
        
        <FooterSection>
          <h3>Quick Links</h3>
          <p>• <Link to="/menu" style={{ color: 'inherit', textDecoration: 'underline' }}>Our Menu</Link></p>
          <p>• <Link to="/about" style={{ color: 'inherit', textDecoration: 'underline' }}>About Us</Link></p>
          <p>• <Link to="/order" style={{ color: 'inherit', textDecoration: 'underline' }}>Order Online</Link></p>
          <p>• <Link to="/coming-soon" style={{ color: 'inherit', textDecoration: 'underline' }}>Catering Services</Link></p>
          <p>• <Link to="/coming-soon" style={{ color: 'inherit', textDecoration: 'underline' }}>Delivery Areas</Link></p>
        </FooterSection>
        
        <FooterSection>
          <h3>Special Offers</h3>
          <p>• <Link to="/coming-soon" style={{ color: 'inherit', textDecoration: 'underline' }}>Family Pizza Deal</Link></p>
          <p>• <Link to="/coming-soon" style={{ color: 'inherit', textDecoration: 'underline' }}>Student Discount</Link></p>
          <p>• <Link to="/coming-soon" style={{ color: 'inherit', textDecoration: 'underline' }}>Weekend Specials</Link></p>
          <p>• <Link to="/coming-soon" style={{ color: 'inherit', textDecoration: 'underline' }}>Loyalty Program</Link></p>
          <p>• <Link to="/coming-soon" style={{ color: 'inherit', textDecoration: 'underline' }}>Birthday Freebies</Link></p>
        </FooterSection>
      </FooterContent>
      
      <FooterBottom>
        <p>&copy; 2024 Dominics Thika. All rights reserved. | Made with ❤️ in Thika</p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer; 