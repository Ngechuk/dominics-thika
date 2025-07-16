const express = require('express');
const router = express.Router();

// Sample menu data (in a real app, this would come from a database)
const menuItems = [
  {
    id: 1,
    name: 'Margherita',
    price: 1200,
    description: 'Classic Italian pizza with fresh mozzarella and basil',
    ingredients: ['Mozzarella', 'Tomato Sauce', 'Basil'],
    category: 'classic',
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    popular: true,
    available: true
  },
  {
    id: 2,
    name: 'Pepperoni',
    price: 1400,
    description: 'Spicy pepperoni with melted mozzarella cheese',
    ingredients: ['Pepperoni', 'Mozzarella', 'Tomato Sauce'],
    category: 'classic',
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    popular: true,
    available: true
  },
  {
    id: 3,
    name: 'BBQ Chicken',
    price: 1600,
    description: 'Grilled chicken with tangy BBQ sauce and onions',
    ingredients: ['Chicken', 'BBQ Sauce', 'Onions', 'Mozzarella'],
    category: 'specialty',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    popular: true,
    available: true
  },
  {
    id: 4,
    name: 'Veggie Supreme',
    price: 1300,
    description: 'Fresh vegetables with mozzarella and tomato sauce',
    ingredients: ['Bell Peppers', 'Mushrooms', 'Onions', 'Olives', 'Mozzarella'],
    category: 'vegetarian',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    popular: true,
    available: true
  },
  {
    id: 5,
    name: 'Hawaiian',
    price: 1500,
    description: 'Ham and pineapple for a sweet and savory taste',
    ingredients: ['Ham', 'Pineapple', 'Mozzarella', 'Tomato Sauce'],
    category: 'classic',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    popular: false,
    available: true
  },
  {
    id: 6,
    name: 'Meat Lovers',
    price: 1800,
    description: 'Loaded with pepperoni, sausage, bacon, and ham',
    ingredients: ['Pepperoni', 'Sausage', 'Bacon', 'Ham', 'Mozzarella'],
    category: 'specialty',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    popular: false,
    available: true
  },
  {
    id: 7,
    name: 'Spinach & Feta',
    price: 1400,
    description: 'Fresh spinach with creamy feta cheese',
    ingredients: ['Spinach', 'Feta Cheese', 'Mozzarella', 'Olive Oil'],
    category: 'vegetarian',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    popular: false,
    available: true
  },
  {
    id: 8,
    name: 'Buffalo Chicken',
    price: 1700,
    description: 'Spicy buffalo chicken with ranch drizzle',
    ingredients: ['Chicken', 'Buffalo Sauce', 'Ranch', 'Mozzarella'],
    category: 'specialty',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    popular: false,
    available: true
  }
];

// Get all menu items
router.get('/', (req, res) => {
  try {
    const { category, popular } = req.query;
    let filteredItems = [...menuItems];

    // Filter by category
    if (category && category !== 'all') {
      filteredItems = filteredItems.filter(item => item.category === category);
    }

    // Filter by popular
    if (popular === 'true') {
      filteredItems = filteredItems.filter(item => item.popular);
    }

    res.json({
      success: true,
      data: filteredItems,
      count: filteredItems.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch menu items'
    });
  }
});

// Get menu item by ID
router.get('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const item = menuItems.find(item => item.id === parseInt(id));

    if (!item) {
      return res.status(404).json({
        success: false,
        error: 'Menu item not found'
      });
    }

    res.json({
      success: true,
      data: item
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch menu item'
    });
  }
});

// Get menu categories
router.get('/categories/list', (req, res) => {
  try {
    const categories = [
      { id: 'all', label: 'All Pizzas' },
      { id: 'classic', label: 'Classic' },
      { id: 'specialty', label: 'Specialty' },
      { id: 'vegetarian', label: 'Vegetarian' }
    ];

    res.json({
      success: true,
      data: categories
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch categories'
    });
  }
});

module.exports = router; 