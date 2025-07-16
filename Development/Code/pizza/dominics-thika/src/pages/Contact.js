import React, { useState } from 'react';
import styled from 'styled-components';
import { FaPizzaSlice, FaPhone, FaMapMarkerAlt, FaClock, FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const ContactContainer = styled.div`
  min-height: 100vh;
  background: #f8f9fa;
  padding: 2rem;
`;

const ContactHeader = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 3rem;
`;

const ContactTitle = styled.h1`
  font-size: 3rem;
  color: #2c3e50;
  margin-bottom: 1rem;
`;

const ContactSubtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
`;

const ContactContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactInfoSection = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.5rem;
    color: #ff6b35;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  
  svg {
    font-size: 1.5rem;
    color: #ff6b35;
    margin-right: 1rem;
    min-width: 20px;
  }
  
  div {
    h4 {
      font-size: 1.1rem;
      color: #2c3e50;
      margin-bottom: 0.2rem;
    }
    
    p {
      color: #666;
      line-height: 1.4;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const SocialLink = styled.a`
  color: #ff6b35;
  font-size: 1.5rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #e55a2b;
  }
`;

const MapSection = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;

const MapPlaceholder = styled.div`
  height: 300px;
  background: linear-gradient(45deg, #ff6b35, #d4af37);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  text-align: center;
`;

const ContactForm = styled.form`
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    color: #2c3e50;
    font-weight: 500;
  }
  
  input, textarea, select {
    width: 100%;
    padding: 0.8rem;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    font-size: 1rem;
    transition: border-color 0.3s ease;
    
    &:focus {
      outline: none;
      border-color: #ff6b35;
    }
  }
  
  textarea {
    resize: vertical;
    min-height: 120px;
  }
`;

const SubmitButton = styled.button`
  background: #ff6b35;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;
  width: 100%;
  
  &:hover {
    background: #e55a2b;
  }
  
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <ContactContainer>
      <ContactHeader>
        <ContactTitle>
          <FaPizzaSlice style={{ marginRight: '1rem', color: '#ff6b35' }} />
          Contact Us
        </ContactTitle>
        <ContactSubtitle>
          Get in touch with us for orders, feedback, or any questions you might have
        </ContactSubtitle>
      </ContactHeader>

      <ContactContent>
        <div>
          <ContactInfoSection>
            <SectionTitle>
              <FaPizzaSlice />
              Get in Touch
            </SectionTitle>
            
            <ContactItem>
              <FaPhone />
              <div>
                <h4>Phone</h4>
                <p>+254 700 123 456</p>
                <p>+254 733 456 789</p>
              </div>
            </ContactItem>
            
            <ContactItem>
              <FaEnvelope />
              <div>
                <h4>Email</h4>
                <p>info@dominicsthika.com</p>
                <p>orders@dominicsthika.com</p>
              </div>
            </ContactItem>
            
            <ContactItem>
              <FaMapMarkerAlt />
              <div>
                <h4>Address</h4>
                <p>123 Pizza Street</p>
                <p>Thika Town, Kiambu County</p>
                <p>Kenya</p>
              </div>
            </ContactItem>
            
            <ContactItem>
              <FaClock />
              <div>
                <h4>Opening Hours</h4>
                <p>Monday - Sunday</p>
                <p>10:00 AM - 10:00 PM</p>
              </div>
            </ContactItem>
            
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
          </ContactInfoSection>

          <MapSection>
            <SectionTitle>
              <FaMapMarkerAlt />
              Find Us
            </SectionTitle>
            <MapPlaceholder>
              <div>
                <FaMapMarkerAlt style={{ fontSize: '3rem', marginBottom: '1rem' }} />
                <p>Interactive Map Coming Soon</p>
                <p>123 Pizza Street, Thika Town</p>
              </div>
            </MapPlaceholder>
          </MapSection>
        </div>

        <ContactForm onSubmit={handleSubmit}>
          <SectionTitle>
            <FaEnvelope />
            Send us a Message
          </SectionTitle>
          
          <FormGroup>
            <label htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </FormGroup>
          
          <FormGroup>
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </FormGroup>
          
          <FormGroup>
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </FormGroup>
          
          <FormGroup>
            <label htmlFor="subject">Subject *</label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
            >
              <option value="">Select a subject</option>
              <option value="order">Order Inquiry</option>
              <option value="feedback">Feedback</option>
              <option value="complaint">Complaint</option>
              <option value="partnership">Partnership</option>
              <option value="other">Other</option>
            </select>
          </FormGroup>
          
          <FormGroup>
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              placeholder="Tell us how we can help you..."
            />
          </FormGroup>
          
          <SubmitButton type="submit">
            Send Message
          </SubmitButton>
        </ContactForm>
      </ContactContent>
    </ContactContainer>
  );
};

export default Contact; 