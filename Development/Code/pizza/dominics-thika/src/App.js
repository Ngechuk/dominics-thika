import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import Order from './pages/Order';
import AdminDashboard from './components/AdminDashboard';
import ComingSoon from './pages/ComingSoon';
import './App.css';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
`;

function App() {
  return (
    <CartProvider>
      <Router>
        <AppContainer>
          <Header />
          <MainContent>
                      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/order" element={<Order />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/coming-soon" element={<ComingSoon />} />
          </Routes>
          </MainContent>
          <Footer />
        </AppContainer>
      </Router>
    </CartProvider>
  );
}

export default App;
