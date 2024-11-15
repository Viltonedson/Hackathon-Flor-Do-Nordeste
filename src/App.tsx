import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Hero from './components/home/Hero';
import Benefits from './components/home/Benefits';
import Main from './components/home/Main';
import ProductPage from './components/product/ProductPage';
import Profile from './components/home/Perfil';
import Messages from './components/home/Messages';
import {AuthProvider}  from './components/context/AuthContext';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import TestimonialsCarousel from './components/home/TestimonialsCarousel'
import Footer from './components/layout/Footer';
import ProductList from './components/product/ProductList';
import Dashboard from './components/home/Dashboard';
import ChatbotPage from './components/home/ChatbotPage'
import SellProduct from './components/product/SellProduct'

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <Routes>
            <Route path="/" element={
              <main>
                <Hero />
                <Main />
                <Benefits />
                <TestimonialsCarousel/>
              </main>
            } />
            <Route path="/produto/:id" element={<ProductPage />} />
            <Route path="/perfil" element={<Profile />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/produtos/:category" element={<ProductList />} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/chat-ia" element={<ChatbotPage />} />
            <Route path="/publicar-produto" element={<SellProduct />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;