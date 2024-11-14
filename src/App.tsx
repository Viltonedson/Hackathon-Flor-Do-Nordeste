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
              </main>
            } />
            <Route path="/produto/:id" element={<ProductPage />} />
            <Route path="/perfil" element={<Profile />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;