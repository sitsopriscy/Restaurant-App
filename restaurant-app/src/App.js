import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MenuManagement from './pages/MenuManagement';
import OrderManagement from './pages/OrderManagement';
import TableManagement from './pages/TableManagement';
import StaffManagement from './pages/StaffManagement';
import './styles/main.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Paplaide Restuarant Management App</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/orders">Orders</a></li>
            <li><a href="/tables">Tables</a></li>
            <li><a href="/staff">Staff</a></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<MenuManagement />} />
          <Route path="/orders" element={<OrderManagement />} />
          <Route path="/tables" element={<TableManagement />} />
          <Route path="/staff" element={<StaffManagement />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
