const express = require('express');
const router = express.Router();

// Simple admin credentials (in a real app, this would be in a database with hashed passwords)
const ADMIN_CREDENTIALS = {
  username: 'admin',
  password: 'dominics2024' // In production, this should be hashed
};

// Admin login
router.post('/login', (req, res) => {
  try {
    const { username, password } = req.body;

    // Validate required fields
    if (!username || !password) {
      return res.status(400).json({
        success: false,
        error: 'Username and password are required'
      });
    }

    // Check credentials
    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
      // In a real app, you would:
      // 1. Generate a JWT token
      // 2. Set proper session management
      // 3. Implement proper security measures

      res.json({
        success: true,
        message: 'Login successful',
        data: {
          user: {
            id: 1,
            username: username,
            role: 'admin'
          },
          token: 'sample-jwt-token-' + Date.now() // Placeholder token
        }
      });
    } else {
      res.status(401).json({
        success: false,
        error: 'Invalid credentials'
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Login failed'
    });
  }
});

// Verify token (middleware for protected routes)
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({
      success: false,
      error: 'Access token required'
    });
  }

  // In a real app, you would verify the JWT token here
  // For now, we'll just check if it's a valid format
  if (token.startsWith('sample-jwt-token-')) {
    next();
  } else {
    res.status(401).json({
      success: false,
      error: 'Invalid token'
    });
  }
};

// Protected route example
router.get('/profile', verifyToken, (req, res) => {
  res.json({
    success: true,
    data: {
      user: {
        id: 1,
        username: 'admin',
        role: 'admin',
        restaurant: 'Dominics Thika'
      }
    }
  });
});

// Logout
router.post('/logout', (req, res) => {
  // In a real app, you would:
  // 1. Invalidate the token
  // 2. Clear session data
  // 3. Log the logout event

  res.json({
    success: true,
    message: 'Logged out successfully'
  });
});

module.exports = router; 