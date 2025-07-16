import React, { useState } from 'react';
import styled from 'styled-components';
import { FaPizzaSlice, FaShoppingCart, FaFilter } from 'react-icons/fa';
import { pizzaData } from '../assets/pizza-images';
import { useCart } from '../context/CartContext';

const MenuContainer = styled.div`
  min-height: 100vh;
  background: #f8f9fa;
  padding: 2rem;
`;

const MenuHeader = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 3rem;
`;

const MenuTitle = styled.h1`
  font-size: 3rem;
  color: #2c3e50;
  margin-bottom: 1rem;
`;

const MenuSubtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
`;

const FilterSection = styled.div`
  max-width: 1200px;
  margin: 0 auto 2rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  background: ${props => props.active ? '#ff6b35' : 'white'};
  color: ${props => props.active ? 'white' : '#2c3e50'};
  border: 2px solid #ff6b35;
  padding: 0.5rem 1.5rem;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background: #ff6b35;
    color: white;
  }
`;

const MenuGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const MenuItem = styled.div`
  background: white;
  border-radius: 15px;
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
`;

const MenuItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

const MenuItemTitle = styled.h3`
  font-size: 1.3rem;
  color: #2c3e50;
  margin: 0;
`;

const MenuItemPrice = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  color: #ff6b35;
`;

const MenuItemDescription = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const MenuItemIngredients = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const IngredientTag = styled.span`
  background: #f0f0f0;
  color: #666;
  padding: 0.2rem 0.5rem;
  border-radius: 10px;
  font-size: 0.8rem;
`;

const AddToCartButton = styled.button`
  width: 100%;
  background: #ff6b35;
  color: white;
  border: none;
  padding: 0.8rem;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  &:hover {
    background: #e55a2b;
  }
  
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

const Menu = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const { addToCart } = useCart();

  const menuItems = pizzaData;

  const filters = [
    { id: 'all', label: 'All Pizzas' },
    { id: 'classic', label: 'Classic' },
    { id: 'specialty', label: 'Specialty' },
    { id: 'vegetarian', label: 'Vegetarian' }
  ];

  const filteredItems = activeFilter === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeFilter);

  const handleAddToCart = (item) => {
    addToCart(item);
    alert(`${item.name} added to cart!`);
  };

  return (
    <MenuContainer>
      <MenuHeader>
        <MenuTitle>
          <FaPizzaSlice style={{ marginRight: '1rem', color: '#ff6b35' }} />
          Our Menu
        </MenuTitle>
        <MenuSubtitle>
          Discover our delicious selection of pizzas made with the finest ingredients
        </MenuSubtitle>
      </MenuHeader>

      <FilterSection>
        {filters.map(filter => (
          <FilterButton
            key={filter.id}
            active={activeFilter === filter.id}
            onClick={() => setActiveFilter(filter.id)}
          >
            <FaFilter style={{ marginRight: '0.5rem' }} />
            {filter.label}
          </FilterButton>
        ))}
      </FilterSection>

      <MenuGrid>
        {filteredItems.map(item => (
          <MenuItem key={item.id}>
            <MenuItemImage image={item.image}>
              <FaPizzaSlice />
            </MenuItemImage>
            <MenuItemContent>
              <MenuItemHeader>
                <MenuItemTitle>{item.name}</MenuItemTitle>
                <MenuItemPrice>KSh {item.price.toLocaleString()}</MenuItemPrice>
              </MenuItemHeader>
              <MenuItemDescription>{item.description}</MenuItemDescription>
              <MenuItemIngredients>
                {item.ingredients.map((ingredient, index) => (
                  <IngredientTag key={index}>{ingredient}</IngredientTag>
                ))}
              </MenuItemIngredients>
              <AddToCartButton onClick={() => handleAddToCart(item)}>
                <FaShoppingCart />
                Add to Cart
              </AddToCartButton>
            </MenuItemContent>
          </MenuItem>
        ))}
      </MenuGrid>
    </MenuContainer>
  );
};

export default Menu; 