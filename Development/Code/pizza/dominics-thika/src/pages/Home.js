import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaPizzaSlice, FaTruck, FaClock, FaStar, FaArrowRight } from 'react-icons/fa';
import { pizzaData } from '../assets/pizza-images';

const HomeContainer = styled.div`
  min-height: 100vh;
`;

const HeroSection = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
              url('https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80');
  background-size: cover;
  background-position: center;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
`;

const HeroContent = styled.div`
  max-width: 800px;
  padding: 2rem;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  font-weight: bold;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.3rem;
  margin-bottom: 2rem;
  opacity: 0.9;
`;

const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  background: #ff6b35;
  color: white;
  padding: 1rem 2rem;
  text-decoration: none;
  border-radius: 50px;
  font-weight: bold;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 107, 53, 0.3);
  
  &:hover {
    background: #e55a2b;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 107, 53, 0.4);
  }
  
  svg {
    margin-left: 0.5rem;
  }
`;

const FeaturesSection = styled.section`
  padding: 4rem 2rem;
  background: #f8f9fa;
`;

const FeaturesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #2c3e50;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const FeatureCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
  
  svg {
    font-size: 3rem;
    color: #ff6b35;
    margin-bottom: 1rem;
  }
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #2c3e50;
  }
  
  p {
    color: #666;
    line-height: 1.6;
  }
`;

const MenuPreviewSection = styled.section`
  padding: 4rem 2rem;
  background: white;
`;

const MenuPreviewContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const MenuItem = styled.div`
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const MenuItemImage = styled.div`
  height: 200px;
  background: ${props => props.image ? `url(${props.image})` : 'linear-gradient(45deg, #ff6b35, #d4af37)'};
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3rem;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
  }
  
  svg {
    position: relative;
    z-index: 1;
  }
`;

const MenuItemContent = styled.div`
  padding: 1.5rem;
  
  h4 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    color: #2c3e50;
  }
  
  p {
    color: #666;
    margin-bottom: 1rem;
  }
  
  .price {
    font-weight: bold;
    color: #ff6b35;
    font-size: 1.1rem;
  }
`;

const ViewMenuButton = styled(Link)`
  display: block;
  text-align: center;
  background: #ff6b35;
  color: white;
  padding: 1rem 2rem;
  text-decoration: none;
  border-radius: 50px;
  font-weight: bold;
  margin-top: 2rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: #e55a2b;
    transform: translateY(-2px);
  }
`;

const Home = () => {
  const popularPizzas = pizzaData.filter(pizza => pizza.popular);

  return (
    <HomeContainer>
      <HeroSection>
        <HeroContent>
          <HeroTitle>
            <FaPizzaSlice style={{ marginRight: '1rem' }} />
            Welcome to Dominics Thika
          </HeroTitle>
          <HeroSubtitle>
            Experience the finest pizzas in Thika with our authentic recipes, 
            fresh ingredients, and unbeatable taste. Order now for fast delivery!
          </HeroSubtitle>
          <CTAButton to="/order">
            Order Now <FaArrowRight />
          </CTAButton>
        </HeroContent>
      </HeroSection>

      <FeaturesSection>
        <FeaturesContainer>
          <SectionTitle>Why Choose Dominics Thika?</SectionTitle>
          <FeaturesGrid>
            <FeatureCard>
              <FaPizzaSlice />
              <h3>Fresh Ingredients</h3>
              <p>We use only the freshest ingredients sourced locally to ensure the best quality and taste.</p>
            </FeatureCard>
            <FeatureCard>
              <FaTruck />
              <h3>Fast Delivery</h3>
              <p>Quick delivery within 30 minutes to all areas in Thika. Hot and fresh to your doorstep.</p>
            </FeatureCard>
            <FeatureCard>
              <FaClock />
              <h3>Open Daily</h3>
              <p>We're open 7 days a week from 10 AM to 10 PM. Perfect for any time cravings!</p>
            </FeatureCard>
            <FeatureCard>
              <FaStar />
              <h3>Best Rated</h3>
              <p>Rated 4.8/5 by our customers. Join thousands of satisfied pizza lovers in Thika.</p>
            </FeatureCard>
          </FeaturesGrid>
        </FeaturesContainer>
      </FeaturesSection>

      <MenuPreviewSection>
        <MenuPreviewContainer>
          <SectionTitle>Popular Pizzas</SectionTitle>
          <MenuGrid>
            {popularPizzas.map((pizza, index) => (
              <MenuItem key={pizza.id}>
                <MenuItemImage image={pizza.image}>
                  <FaPizzaSlice />
                </MenuItemImage>
                <MenuItemContent>
                  <h4>{pizza.name}</h4>
                  <p>{pizza.description}</p>
                  <div className="price">KSh {pizza.price.toLocaleString()}</div>
                </MenuItemContent>
              </MenuItem>
            ))}
          </MenuGrid>
          <ViewMenuButton to="/menu">
            View Full Menu <FaArrowRight />
          </ViewMenuButton>
        </MenuPreviewContainer>
      </MenuPreviewSection>
    </HomeContainer>
  );
};

export default Home; 