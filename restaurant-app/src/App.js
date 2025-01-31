import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MenuManagement from './pages/MenuManagement';
import OrderManagement from './pages/OrderManagement';
import StaffManagement from './pages/StaffManagement';
import TableManagement from './pages/TableManagement';
import Home from './pages/Home';  // Import Home component

function App() {
   return (
      <Router>
         <Routes>
            <Route path="/" element={<Home />} /> {/* Add Home route */}
            <Route path="/menu-management" element={<MenuManagement />} />
            <Route path="/order-management" element={<OrderManagement />} />
            <Route path="/staff-management" element={<StaffManagement />} />
            <Route path="/table-management" element={<TableManagement />} />
         </Routes>
      </Router>
   );
}

export default App;
