const express = require('express');
const router = express.Router();

// In-memory storage for orders (in a real app, this would be a database)
let orders = [];
let orderIdCounter = 1;

// Place a new order
router.post('/', (req, res) => {
  try {
    const {
      customerName,
      phone,
      address,
      deliveryInstructions,
      paymentMethod,
      items,
      subtotal,
      deliveryFee,
      total
    } = req.body;

    // Validate required fields
    if (!customerName || !phone || !address || !items || items.length === 0) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: customerName, phone, address, and items are required'
      });
    }

    // Create new order
    const newOrder = {
      id: orderIdCounter++,
      customerName,
      phone,
      address,
      deliveryInstructions: deliveryInstructions || '',
      paymentMethod: paymentMethod || 'cash',
      items,
      subtotal,
      deliveryFee,
      total,
      status: 'pending',
      orderDate: new Date().toISOString(),
      estimatedDelivery: new Date(Date.now() + 30 * 60 * 1000).toISOString() // 30 minutes from now
    };

    orders.push(newOrder);

    // In a real app, you would:
    // 1. Save to database
    // 2. Send confirmation SMS/email
    // 3. Notify kitchen staff
    // 4. Process payment

    res.status(201).json({
      success: true,
      message: 'Order placed successfully!',
      data: {
        orderId: newOrder.id,
        estimatedDelivery: newOrder.estimatedDelivery,
        total: newOrder.total
      }
    });

  } catch (error) {
    console.error('Error placing order:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to place order'
    });
  }
});

// Get all orders (admin endpoint)
router.get('/', (req, res) => {
  try {
    const { status, limit = 50 } = req.query;
    let filteredOrders = [...orders];

    // Filter by status
    if (status) {
      filteredOrders = filteredOrders.filter(order => order.status === status);
    }

    // Limit results
    filteredOrders = filteredOrders.slice(0, parseInt(limit));

    // Sort by order date (newest first)
    filteredOrders.sort((a, b) => new Date(b.orderDate) - new Date(a.orderDate));

    res.json({
      success: true,
      data: filteredOrders,
      count: filteredOrders.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch orders'
    });
  }
});

// Get order by ID
router.get('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const order = orders.find(order => order.id === parseInt(id));

    if (!order) {
      return res.status(404).json({
        success: false,
        error: 'Order not found'
      });
    }

    res.json({
      success: true,
      data: order
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch order'
    });
  }
});

// Update order status (admin endpoint)
router.patch('/:id/status', (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const validStatuses = ['pending', 'confirmed', 'preparing', 'out_for_delivery', 'delivered', 'cancelled'];
    
    if (!validStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid status. Must be one of: ' + validStatuses.join(', ')
      });
    }

    const orderIndex = orders.findIndex(order => order.id === parseInt(id));
    
    if (orderIndex === -1) {
      return res.status(404).json({
        success: false,
        error: 'Order not found'
      });
    }

    orders[orderIndex].status = status;
    orders[orderIndex].lastUpdated = new Date().toISOString();

    res.json({
      success: true,
      message: 'Order status updated successfully',
      data: orders[orderIndex]
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to update order status'
    });
  }
});

// Get order status by phone number (customer endpoint)
router.get('/status/:phone', (req, res) => {
  try {
    const { phone } = req.params;
    const customerOrders = orders
      .filter(order => order.phone === phone)
      .sort((a, b) => new Date(b.orderDate) - new Date(a.orderDate));

    res.json({
      success: true,
      data: customerOrders
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch order status'
    });
  }
});

module.exports = router; 