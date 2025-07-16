# Dominics Thika - Pizza Restaurant Website

A modern, responsive pizza restaurant website built with React for the frontend and Ruby for the backend. Dominics Thika serves the finest pizzas in Thika, Kenya.

## 🍕 Features

- **Modern Design**: Beautiful, responsive design with smooth animations
- **Menu Management**: Browse pizzas by category (Classic, Specialty, Vegetarian)
- **Online Ordering**: Complete ordering system with cart functionality
- **Contact Form**: Easy communication with customers
- **Mobile Responsive**: Works perfectly on all devices
- **Fast Delivery**: Order tracking and delivery information

## 🚀 Tech Stack

### Frontend

- **React 19** - Modern React with hooks and functional components
- **React Router** - Client-side routing
- **Styled Components** - CSS-in-JS styling
- **React Icons** - Beautiful icon library

### Backend

- **Node.js/Express** - RESTful API
- **CORS** - Cross-origin resource sharing
- **Helmet** - Security middleware
- **JWT** - Authentication (ready for implementation)
- **Stripe** - Payment processing (ready for integration)

## 📱 Pages

1. **Home** - Hero section, features, and popular pizzas
2. **Menu** - Complete pizza menu with filtering
3. **About** - Restaurant story and values
4. **Contact** - Contact information and form
5. **Order** - Shopping cart and checkout

## 🛠️ Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Quick Start

```bash
# Clone the repository
git clone <repository-url>
cd dominics-thika

# Run the startup script (installs dependencies and starts both servers)
./start.sh
```

This will start both the frontend and backend servers:

- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend API: [http://localhost:5000](http://localhost:5000)
- Admin Dashboard: [http://localhost:3000/admin](http://localhost:3000/admin)

### Manual Setup

#### Frontend Setup

```bash
# Install dependencies
npm install

# Start the development server
npm start
```

#### Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App

## 🍕 Menu Categories

### Classic Pizzas

- Margherita (KSh 1,200) - Fresh mozzarella, tomato sauce, basil
- Pepperoni (KSh 1,400) - Spicy pepperoni, mozzarella, tomato sauce
- Hawaiian (KSh 1,500) - Ham and pineapple for a sweet and savory taste

### Specialty Pizzas

- BBQ Chicken (KSh 1,600) - Grilled chicken with tangy BBQ sauce and onions
- Meat Lovers (KSh 1,800) - Loaded with pepperoni, sausage, bacon, and ham
- Buffalo Chicken (KSh 1,700) - Spicy buffalo chicken with ranch drizzle

### Vegetarian Pizzas

- Veggie Supreme (KSh 1,300) - Fresh vegetables, mozzarella, tomato sauce
- Spinach & Feta (KSh 1,400) - Fresh spinach with creamy feta cheese

## 📞 Contact Information

- **Phone**: +254 700 123 456
- **Email**: info@dominicsthika.com
- **Address**: 123 Pizza Street, Thika Town, Kenya
- **Hours**: Mon-Sun 10:00 AM - 10:00 PM

## 🎨 Design Features

- **Color Scheme**: Orange (#ff6b35) and Gold (#d4af37) theme
- **Typography**: Modern, readable fonts
- **Animations**: Smooth hover effects and transitions
- **Icons**: Consistent iconography throughout
- **Layout**: Grid-based responsive design

## 🔧 Development

### Project Structure

```
dominics-thika/
├── src/                    # Frontend React app
│   ├── components/         # Reusable components
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   └── AdminDashboard.js
│   ├── pages/             # Page components
│   │   ├── Home.js
│   │   ├── Menu.js
│   │   ├── About.js
│   │   ├── Contact.js
│   │   └── Order.js
│   ├── context/           # React context
│   │   └── CartContext.js
│   ├── services/          # API services
│   │   └── api.js
│   ├── assets/            # Images and data
│   │   └── pizza-images.js
│   └── App.js             # Main app component
├── backend/               # Backend API
│   ├── routes/            # API routes
│   │   ├── menu.js
│   │   ├── orders.js
│   │   └── auth.js
│   ├── server.js          # Main server file
│   └── package.json       # Backend dependencies
├── start.sh               # Startup script
└── README.md              # This file
```

### Styling

The project uses Styled Components for CSS-in-JS styling, providing:

- Component-scoped styles
- Dynamic styling based on props
- Theme consistency
- Easy responsive design

## 🚀 Deployment

### Frontend Deployment

```bash
# Build for production
npm run build
```

This creates an optimized production build in the `build` folder.

### Backend Deployment

```bash
# Navigate to backend directory
cd backend

# Install production dependencies
npm install --production

# Start production server
npm start
```

### Deploy to Cloud Platforms

#### Frontend (Netlify/Vercel)

1. Push your code to GitHub
2. Connect your repository to Netlify or Vercel
3. Set build command: `npm run build`
4. Deploy automatically on push

#### Backend (Heroku/Railway)

1. Push your code to GitHub
2. Connect your repository to Heroku or Railway
3. Set environment variables
4. Deploy automatically on push

### Environment Variables

Set the following environment variables for production:

```bash
# Frontend
REACT_APP_API_URL=https://your-backend-url.com/api

# Backend
NODE_ENV=production
PORT=5000
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆕 New Features

### ✨ Enhanced Features

- **Real Pizza Images**: High-quality pizza images from Unsplash
- **Shopping Cart**: Persistent cart with localStorage
- **Backend API**: Full RESTful API with Express.js
- **Admin Dashboard**: Order management interface
- **Order Tracking**: Real-time order status updates
- **Phone Validation**: Kenyan phone number validation
- **Responsive Design**: Mobile-first responsive design

### 🔧 Technical Improvements

- **State Management**: React Context for cart management
- **API Integration**: Axios-based API service layer
- **Error Handling**: Comprehensive error handling
- **Security**: Helmet.js security middleware
- **Performance**: Optimized images and lazy loading

## 🙏 Acknowledgments

- Pizza images from Unsplash
- Icons from React Icons
- Inspiration from local pizza restaurants in Thika
- Backend architecture inspired by modern REST APIs

---

**Made with ❤️ in Thika, Kenya**
