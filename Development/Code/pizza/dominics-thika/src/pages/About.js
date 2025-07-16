import React from 'react';
import styled from 'styled-components';
import { FaPizzaSlice, FaHeart, FaUsers, FaAward, FaLeaf } from 'react-icons/fa';

const AboutContainer = styled.div`
  min-height: 100vh;
  background: #f8f9fa;
`;

const HeroSection = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
              url('https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80');
  background-size: cover;
  background-position: center;
  height: 60vh;
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
  opacity: 0.9;
`;

const ContentSection = styled.section`
  padding: 4rem 2rem;
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #2c3e50;
`;

const StorySection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const StoryContent = styled.div`
  h3 {
    font-size: 2rem;
    color: #2c3e50;
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #666;
    margin-bottom: 1rem;
  }
`;

const StoryImage = styled.div`
  height: 400px;
  background: linear-gradient(45deg, #ff6b35, #d4af37);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 4rem;
`;

const ValuesSection = styled.div`
  margin-top: 4rem;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ValueCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 15px;
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
  
  h4 {
    font-size: 1.3rem;
    color: #2c3e50;
    margin-bottom: 1rem;
  }
  
  p {
    color: #666;
    line-height: 1.6;
  }
`;

const StatsSection = styled.div`
  background: #2c3e50;
  color: white;
  padding: 4rem 2rem;
  margin-top: 4rem;
`;

const StatsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const StatsTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 3rem;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
`;

const StatCard = styled.div`
  h3 {
    font-size: 3rem;
    color: #ff6b35;
    margin-bottom: 0.5rem;
  }
  
  p {
    font-size: 1.1rem;
    opacity: 0.9;
  }
`;

const About = () => {
  const values = [
    {
      icon: <FaHeart />,
      title: 'Made with Love',
      description: 'Every pizza is crafted with passion and care, ensuring the perfect taste every time.'
    },
    {
      icon: <FaLeaf />,
      title: 'Fresh Ingredients',
      description: 'We source only the freshest, highest quality ingredients from local suppliers.'
    },
    {
      icon: <FaUsers />,
      title: 'Community Focused',
      description: 'We\'re proud to be part of the Thika community and support local businesses.'
    },
    {
      icon: <FaAward />,
      title: 'Quality Assured',
      description: 'Our commitment to quality has earned us the trust of thousands of customers.'
    }
  ];

  return (
    <AboutContainer>
      <HeroSection>
        <HeroContent>
          <HeroTitle>
            <FaPizzaSlice style={{ marginRight: '1rem' }} />
            Our Story
          </HeroTitle>
          <HeroSubtitle>
            From humble beginnings to becoming Thika's favorite pizza destination
          </HeroSubtitle>
        </HeroContent>
      </HeroSection>

      <ContentSection>
        <ContentContainer>
          <StorySection>
            <StoryContent>
              <h3>The Beginning</h3>
              <p>
                Dominics Thika was founded in 2010 by Dominic Mwangi, a passionate chef 
                who dreamed of bringing authentic Italian pizza to the heart of Thika. 
                What started as a small family kitchen has grown into one of the most 
                beloved pizza restaurants in the region.
              </p>
              <p>
                Dominic's journey began when he traveled to Italy and fell in love with 
                the art of pizza making. He spent years perfecting his craft, learning 
                traditional techniques and recipes that he would later bring back to Kenya.
              </p>
            </StoryContent>
            <StoryImage>
              <FaPizzaSlice />
            </StoryImage>
          </StorySection>

          <StorySection>
            <StoryImage>
              <FaPizzaSlice />
            </StoryImage>
            <StoryContent>
              <h3>Our Growth</h3>
              <p>
                Over the years, Dominics Thika has evolved from a small takeaway spot 
                to a full-service restaurant that serves thousands of customers every week. 
                Our success is built on the foundation of quality, consistency, and 
                exceptional customer service.
              </p>
              <p>
                We've expanded our menu to include a wide variety of pizzas, from classic 
                favorites to innovative specialty creations. But our commitment to using 
                only the finest ingredients and traditional cooking methods has never wavered.
              </p>
            </StoryContent>
          </StorySection>

          <ValuesSection>
            <SectionTitle>Our Values</SectionTitle>
            <ValuesGrid>
              {values.map((value, index) => (
                <ValueCard key={index}>
                  {value.icon}
                  <h4>{value.title}</h4>
                  <p>{value.description}</p>
                </ValueCard>
              ))}
            </ValuesGrid>
          </ValuesSection>
        </ContentContainer>
      </ContentSection>

      <StatsSection>
        <StatsContainer>
          <StatsTitle>Dominics Thika by the Numbers</StatsTitle>
          <StatsGrid>
            <StatCard>
              <h3>14+</h3>
              <p>Years of Excellence</p>
            </StatCard>
            <StatCard>
              <h3>50K+</h3>
              <p>Happy Customers</p>
            </StatCard>
            <StatCard>
              <h3>100K+</h3>
              <p>Pizzas Delivered</p>
            </StatCard>
            <StatCard>
              <h3>4.8</h3>
              <p>Customer Rating</p>
            </StatCard>
          </StatsGrid>
        </StatsContainer>
      </StatsSection>
    </AboutContainer>
  );
};

export default About; 