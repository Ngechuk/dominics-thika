# Dominics Thika Backend API

A Node.js/Express backend API for the Dominics Thika pizza restaurant website.

## 🚀 Features

- **Menu Management**: Get pizza menu items with filtering and categories
- **Order Processing**: Place and manage customer orders
- **Authentication**: Basic admin authentication system
- **RESTful API**: Clean and consistent API endpoints
- **Error Handling**: Comprehensive error handling and validation

## 🛠️ Tech Stack

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **CORS** - Cross-origin resource sharing
- **Helmet** - Security middleware
- **Morgan** - HTTP request logger

## 📦 Installation

1. **Navigate to backend directory:**

   ```bash
   cd backend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   ```bash
   cp env.example .env
   # Edit .env with your configuration
   ```

4. **Start the server:**

   ```bash
   # Development mode
   npm run dev

   # Production mode
   npm start
   ```

The API will be available at `http://localhost:5000`

## 📚 API Endpoints

### Health Check

- `GET /api/health` - Check API status

### Menu

- `GET /api/menu` - Get all menu items
- `GET /api/menu?category=classic` - Filter by category
- `GET /api/menu?popular=true` - Get popular items only
- `GET /api/menu/:id` - Get specific menu item
- `GET /api/menu/categories/list` - Get all categories

### Orders

- `POST /api/orders` - Place a new order
- `GET /api/orders` - Get all orders (admin)
- `GET /api/orders/:id` - Get specific order
- `PATCH /api/orders/:id/status` - Update order status
- `GET /api/orders/status/:phone` - Get orders by phone number

### Authentication

- `POST /api/auth/login` - Admin login
- `GET /api/auth/profile` - Get user profile (protected)
- `POST /api/auth/logout` - Logout

## 📝 API Examples

### Place an Order

```bash
curl -X POST http://localhost:5000/api/orders \
  -H "Content-Type: application/json" \
  -d '{
    "customerName": "John Doe",
    "phone": "+254700123456",
    "address": "123 Pizza Street, Thika",
    "items": [
      {
        "id": 1,
        "name": "Margherita",
        "price": 1200,
        "quantity": 2
      }
    ],
    "subtotal": 2400,
    "deliveryFee": 200,
    "total": 2600
  }'
```

### Get Menu Items

```bash
curl http://localhost:5000/api/menu
```

### Admin Login

```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "username": "admin",
    "password": "dominics2024"
  }'
```

## 🔧 Development

### Project Structure

```
backend/
├── routes/          # API route handlers
│   ├── menu.js      # Menu endpoints
│   ├── orders.js    # Order endpoints
│   └── auth.js      # Authentication endpoints
├── server.js        # Main server file
├── package.json     # Dependencies and scripts
└── README.md        # This file
```

### Available Scripts

- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm test` - Run tests (when implemented)

## 🔒 Security

- **Helmet.js** - Security headers
- **CORS** - Cross-origin protection
- **Input Validation** - Request validation
- **Error Handling** - Secure error responses

## 🚀 Deployment

### Environment Variables

Set the following environment variables for production:

```bash
NODE_ENV=production
PORT=5000
```

### Process Manager

For production deployment, consider using:

- **PM2** - Process manager for Node.js
- **Docker** - Containerization
- **Nginx** - Reverse proxy

## 🔮 Future Enhancements

- **Database Integration** - MongoDB/PostgreSQL
- **JWT Authentication** - Proper token-based auth
- **SMS Notifications** - Twilio integration
- **Payment Processing** - Stripe integration
- **Email Notifications** - Order confirmations
- **Admin Dashboard** - Order management interface
- **Real-time Updates** - WebSocket integration

## 📞 Support

For support or questions, contact:

- **Email**: info@dominicsthika.com
- **Phone**: +254 700 123 456

---

**Made with ❤️ for Dominics Thika**
