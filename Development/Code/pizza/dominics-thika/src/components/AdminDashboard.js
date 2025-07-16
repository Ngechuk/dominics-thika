import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaPizzaSlice, FaClock, FaCheckCircle, FaTruck, FaTimes, FaEye } from 'react-icons/fa';
import { ordersAPI, apiUtils } from '../services/api';

const DashboardContainer = styled.div`
  min-height: 100vh;
  background: #f8f9fa;
  padding: 2rem;
`;

const DashboardHeader = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 3rem;
`;

const DashboardTitle = styled.h1`
  font-size: 3rem;
  color: #2c3e50;
  margin-bottom: 1rem;
`;

const DashboardSubtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
`;

const StatsGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const StatCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  
  svg {
    font-size: 3rem;
    color: #ff6b35;
    margin-bottom: 1rem;
  }
  
  h3 {
    font-size: 2rem;
    color: #2c3e50;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: #666;
    font-size: 1.1rem;
  }
`;

const OrdersSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const SectionHeader = styled.div`
  padding: 2rem;
  border-bottom: 1px solid #e0e0e0;
  
  h2 {
    font-size: 2rem;
    color: #2c3e50;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: #666;
  }
`;

const OrderItem = styled.div`
  padding: 1.5rem 2rem;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background: #f8f9fa;
  }
`;

const OrderInfo = styled.div`
  flex: 1;
  
  h4 {
    font-size: 1.2rem;
    color: #2c3e50;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: #666;
    margin-bottom: 0.25rem;
  }
  
  .order-id {
    font-weight: bold;
    color: #ff6b35;
  }
  
  .total {
    font-weight: bold;
    color: #2c3e50;
  }
`;

const OrderStatus = styled.span`
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: bold;
  margin-right: 1rem;
  
  &.pending {
    background: #fff3cd;
    color: #856404;
  }
  
  &.confirmed {
    background: #d1ecf1;
    color: #0c5460;
  }
  
  &.preparing {
    background: #d4edda;
    color: #155724;
  }
  
  &.out_for_delivery {
    background: #cce5ff;
    color: #004085;
  }
  
  &.delivered {
    background: #d4edda;
    color: #155724;
  }
  
  &.cancelled {
    background: #f8d7da;
    color: #721c24;
  }
`;

const OrderActions = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const ActionButton = styled.button`
  background: ${props => props.variant === 'danger' ? '#e74c3c' : '#ff6b35'};
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background 0.3s ease;
  
  &:hover {
    background: ${props => props.variant === 'danger' ? '#c0392b' : '#e55a2b'};
  }
  
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 3rem;
  color: #666;
  
  svg {
    font-size: 4rem;
    color: #ccc;
    margin-bottom: 1rem;
  }
`;

const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    preparing: 0,
    delivered: 0
  });

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const response = await ordersAPI.getAll({ limit: 50 });
      if (response.data.success) {
        const ordersData = response.data.data;
        setOrders(ordersData);
        
        // Calculate stats
        const statsData = {
          total: ordersData.length,
          pending: ordersData.filter(order => order.status === 'pending').length,
          preparing: ordersData.filter(order => order.status === 'preparing').length,
          delivered: ordersData.filter(order => order.status === 'delivered').length
        };
        setStats(statsData);
      }
    } catch (error) {
      console.error('Error fetching orders:', error);
      alert('Failed to fetch orders');
    } finally {
      setLoading(false);
    }
  };

  const updateOrderStatus = async (orderId, newStatus) => {
    try {
      const response = await ordersAPI.updateStatus(orderId, newStatus);
      if (response.data.success) {
        // Update local state
        setOrders(prev => prev.map(order => 
          order.id === orderId 
            ? { ...order, status: newStatus }
            : order
        ));
        
        // Refresh stats
        fetchOrders();
        alert('Order status updated successfully');
      }
    } catch (error) {
      const errorInfo = apiUtils.handleError(error);
      alert(`Failed to update order status: ${errorInfo.message}`);
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'pending': return <FaClock />;
      case 'confirmed': return <FaCheckCircle />;
      case 'preparing': return <FaPizzaSlice />;
      case 'out_for_delivery': return <FaTruck />;
      case 'delivered': return <FaCheckCircle />;
      case 'cancelled': return <FaTimes />;
      default: return <FaClock />;
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString('en-KE');
  };

  if (loading) {
    return (
      <DashboardContainer>
        <div style={{ textAlign: 'center', padding: '3rem' }}>
          <h2>Loading dashboard...</h2>
        </div>
      </DashboardContainer>
    );
  }

  return (
    <DashboardContainer>
      <DashboardHeader>
        <DashboardTitle>
          <FaPizzaSlice style={{ marginRight: '1rem', color: '#ff6b35' }} />
          Admin Dashboard
        </DashboardTitle>
        <DashboardSubtitle>
          Manage orders and monitor restaurant performance
        </DashboardSubtitle>
      </DashboardHeader>

      <StatsGrid>
        <StatCard>
          <FaPizzaSlice />
          <h3>{stats.total}</h3>
          <p>Total Orders</p>
        </StatCard>
        <StatCard>
          <FaClock />
          <h3>{stats.pending}</h3>
          <p>Pending Orders</p>
        </StatCard>
        <StatCard>
          <FaPizzaSlice />
          <h3>{stats.preparing}</h3>
          <p>Preparing</p>
        </StatCard>
        <StatCard>
          <FaCheckCircle />
          <h3>{stats.delivered}</h3>
          <p>Delivered</p>
        </StatCard>
      </StatsGrid>

      <OrdersSection>
        <SectionHeader>
          <h2>Recent Orders</h2>
          <p>Manage and update order status</p>
        </SectionHeader>

        {orders.length === 0 ? (
          <EmptyState>
            <FaPizzaSlice />
            <h3>No orders yet</h3>
            <p>Orders will appear here when customers place them</p>
          </EmptyState>
        ) : (
          orders.map(order => (
            <OrderItem key={order.id}>
              <OrderInfo>
                <h4>
                  <span className="order-id">#{order.id}</span> - {order.customerName}
                </h4>
                <p><strong>Phone:</strong> {order.phone}</p>
                <p><strong>Address:</strong> {order.address}</p>
                <p><strong>Items:</strong> {order.items.length} pizzas</p>
                <p><strong>Total:</strong> <span className="total">{apiUtils.formatCurrency(order.total)}</span></p>
                <p><strong>Ordered:</strong> {formatDate(order.orderDate)}</p>
              </OrderInfo>
              
              <OrderStatus className={order.status}>
                {getStatusIcon(order.status)} {order.status.replace('_', ' ')}
              </OrderStatus>
              
              <OrderActions>
                <ActionButton onClick={() => alert(`Order details:\n${JSON.stringify(order, null, 2)}`)}>
                  <FaEye /> View
                </ActionButton>
                
                {order.status === 'pending' && (
                  <>
                    <ActionButton onClick={() => updateOrderStatus(order.id, 'confirmed')}>
                      Confirm
                    </ActionButton>
                    <ActionButton variant="danger" onClick={() => updateOrderStatus(order.id, 'cancelled')}>
                      Cancel
                    </ActionButton>
                  </>
                )}
                
                {order.status === 'confirmed' && (
                  <ActionButton onClick={() => updateOrderStatus(order.id, 'preparing')}>
                    Start Preparing
                  </ActionButton>
                )}
                
                {order.status === 'preparing' && (
                  <ActionButton onClick={() => updateOrderStatus(order.id, 'out_for_delivery')}>
                    Out for Delivery
                  </ActionButton>
                )}
                
                {order.status === 'out_for_delivery' && (
                  <ActionButton onClick={() => updateOrderStatus(order.id, 'delivered')}>
                    Mark Delivered
                  </ActionButton>
                )}
              </OrderActions>
            </OrderItem>
          ))
        )}
      </OrdersSection>
    </DashboardContainer>
  );
};

export default AdminDashboard; 