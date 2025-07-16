import React, { useState } from 'react';
import styled from 'styled-components';
import { FaPizzaSlice, FaShoppingCart, FaTrash, FaPlus, FaMinus, FaCreditCard, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { ordersAPI, apiUtils } from '../services/api';

const OrderContainer = styled.div`
  min-height: 100vh;
  background: #f8f9fa;
  padding: 2rem;
`;

const OrderHeader = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 3rem;
`;

const OrderTitle = styled.h1`
  font-size: 3rem;
  color: #2c3e50;
  margin-bottom: 1rem;
`;

const OrderSubtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
`;

const OrderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CartSection = styled.div`
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

const CartItem = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #e0e0e0;
  
  &:last-child {
    border-bottom: none;
  }
`;

const ItemImage = styled.div`
  width: 80px;
  height: 80px;
  background: ${props => props.image ? `url(${props.image})` : 'linear-gradient(45deg, #ff6b35, #d4af37)'};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
  margin-right: 1rem;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 10px;
  }
  
  svg {
    position: relative;
    z-index: 1;
  }
`;

const ItemDetails = styled.div`
  flex: 1;
  
  h4 {
    font-size: 1.2rem;
    color: #2c3e50;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: #666;
    font-size: 0.9rem;
  }
`;

const ItemPrice = styled.div`
  font-weight: bold;
  color: #ff6b35;
  font-size: 1.1rem;
  margin: 0 1rem;
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0 1rem;
`;

const QuantityButton = styled.button`
  background: #ff6b35;
  color: white;
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease;
  
  &:hover {
    background: #e55a2b;
  }
  
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

const Quantity = styled.span`
  font-weight: bold;
  min-width: 20px;
  text-align: center;
`;

const RemoveButton = styled.button`
  background: #e74c3c;
  color: white;
  border: none;
  padding: 0.5rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;
  
  &:hover {
    background: #c0392b;
  }
`;

const EmptyCart = styled.div`
  text-align: center;
  padding: 3rem;
  color: #666;
  
  svg {
    font-size: 4rem;
    color: #ccc;
    margin-bottom: 1rem;
  }
`;

const CheckoutSection = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  height: fit-content;
  position: sticky;
  top: 2rem;
`;

const OrderSummary = styled.div`
  margin-bottom: 2rem;
`;

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  
  &.total {
    font-weight: bold;
    font-size: 1.2rem;
    color: #ff6b35;
    border-top: 1px solid #e0e0e0;
    padding-top: 1rem;
    margin-top: 1rem;
  }
`;

const CheckoutForm = styled.form`
  margin-top: 2rem;
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
    min-height: 80px;
  }
`;

const CheckoutButton = styled.button`
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

const Order = () => {
  const { items: cart, updateQuantity, removeFromCart, getCartTotal, clearCart } = useCart();
  
  const [checkoutData, setCheckoutData] = useState({
    name: '',
    phone: '',
    address: '',
    deliveryInstructions: '',
    paymentMethod: 'cash'
  });

  const calculateSubtotal = () => {
    return getCartTotal();
  };

  const calculateDeliveryFee = () => {
    return calculateSubtotal() > 2000 ? 0 : 200;
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateDeliveryFee();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCheckoutData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckout = async (e) => {
    e.preventDefault();
    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }

    // Validate phone number
    if (!apiUtils.validatePhone(checkoutData.phone)) {
      alert('Please enter a valid Kenyan phone number');
      return;
    }

    try {
      const orderData = {
        customerName: checkoutData.name,
        phone: apiUtils.formatPhone(checkoutData.phone),
        address: checkoutData.address,
        deliveryInstructions: checkoutData.deliveryInstructions,
        paymentMethod: checkoutData.paymentMethod,
        items: cart,
        subtotal: calculateSubtotal(),
        deliveryFee: calculateDeliveryFee(),
        total: calculateTotal()
      };

      const response = await ordersAPI.create(orderData);
      
      if (response.data.success) {
        alert(`Order placed successfully! Order ID: ${response.data.data.orderId}. You will receive a confirmation call soon.`);
        
        // Clear cart and form
        clearCart();
        setCheckoutData({
          name: '',
          phone: '',
          address: '',
          deliveryInstructions: '',
          paymentMethod: 'cash'
        });
      }
    } catch (error) {
      const errorInfo = apiUtils.handleError(error);
      alert(`Order failed: ${errorInfo.message}`);
    }
  };

  return (
    <OrderContainer>
      <OrderHeader>
        <OrderTitle>
          <FaShoppingCart style={{ marginRight: '1rem', color: '#ff6b35' }} />
          Place Your Order
        </OrderTitle>
        <OrderSubtitle>
          Review your cart and complete your order for fast delivery
        </OrderSubtitle>
      </OrderHeader>

      <OrderContent>
        <CartSection>
          <SectionTitle>
            <FaShoppingCart />
            Your Cart
          </SectionTitle>
          
          {cart.length === 0 ? (
            <EmptyCart>
              <FaPizzaSlice />
              <h3>Your cart is empty</h3>
              <p>Add some delicious pizzas to get started!</p>
            </EmptyCart>
          ) : (
            cart.map(item => (
              <CartItem key={item.id}>
                <ItemImage image={item.image}>
                  <FaPizzaSlice />
                </ItemImage>
                <ItemDetails>
                  <h4>{item.name}</h4>
                  <p>{item.description}</p>
                </ItemDetails>
                <ItemPrice>KSh {item.price.toLocaleString()}</ItemPrice>
                <QuantityControl>
                  <QuantityButton 
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    <FaMinus />
                  </QuantityButton>
                  <Quantity>{item.quantity}</Quantity>
                  <QuantityButton 
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    <FaPlus />
                  </QuantityButton>
                </QuantityControl>
                <ItemPrice>KSh {(item.price * item.quantity).toLocaleString()}</ItemPrice>
                <RemoveButton onClick={() => removeFromCart(item.id)}>
                  <FaTrash />
                </RemoveButton>
              </CartItem>
            ))
          )}
        </CartSection>

        <CheckoutSection>
          <SectionTitle>
            <FaCreditCard />
            Checkout
          </SectionTitle>
          
          <OrderSummary>
            <SummaryItem>
              <span>Subtotal:</span>
              <span>KSh {calculateSubtotal().toLocaleString()}</span>
            </SummaryItem>
            <SummaryItem>
              <span>Delivery Fee:</span>
              <span>{calculateDeliveryFee() === 0 ? 'FREE' : `KSh ${calculateDeliveryFee()}`}</span>
            </SummaryItem>
            <SummaryItem className="total">
              <span>Total:</span>
              <span>KSh {calculateTotal().toLocaleString()}</span>
            </SummaryItem>
          </OrderSummary>

          <CheckoutForm onSubmit={handleCheckout}>
            <FormGroup>
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={checkoutData.name}
                onChange={handleInputChange}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <label htmlFor="phone">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={checkoutData.phone}
                onChange={handleInputChange}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <label htmlFor="address">Delivery Address *</label>
              <textarea
                id="address"
                name="address"
                value={checkoutData.address}
                onChange={handleInputChange}
                required
                placeholder="Enter your full delivery address..."
              />
            </FormGroup>
            
            <FormGroup>
              <label htmlFor="deliveryInstructions">Delivery Instructions</label>
              <textarea
                id="deliveryInstructions"
                name="deliveryInstructions"
                value={checkoutData.deliveryInstructions}
                onChange={handleInputChange}
                placeholder="Any special instructions for delivery..."
              />
            </FormGroup>
            
            <FormGroup>
              <label htmlFor="paymentMethod">Payment Method *</label>
              <select
                id="paymentMethod"
                name="paymentMethod"
                value={checkoutData.paymentMethod}
                onChange={handleInputChange}
                required
              >
                <option value="cash">Cash on Delivery</option>
                <option value="mpesa">M-Pesa</option>
                <option value="card">Credit/Debit Card</option>
              </select>
            </FormGroup>
            
            <CheckoutButton type="submit" disabled={cart.length === 0}>
              <FaCreditCard />
              Place Order - KSh {calculateTotal().toLocaleString()}
            </CheckoutButton>
          </CheckoutForm>
        </CheckoutSection>
      </OrderContent>
    </OrderContainer>
  );
};

export default Order; 