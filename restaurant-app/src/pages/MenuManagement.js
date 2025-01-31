import React, { useState, useEffect } from 'react';
import { fetchMenuItems } from '../services/api';
import Button from '../components/Button';

function MenuManagement() {
  const [menuItems, setMenuItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  useEffect(() => {
    fetchMenuItems().then(data => setMenuItems(data));
  }, []);

  const handleAddItem = () => {
    // Add item logic here (e.g., API call)
    console.log(`Added new item: ${newItem}`);
  };

  return (
    <div>
      <h2>Menu Management</h2>
      <input 
        type="text" 
        value={newItem} 
        onChange={(e) => setNewItem(e.target.value)} 
        placeholder="Enter new menu item"
      />
      <Button label="Add Item" onClick={handleAddItem} />
      <ul>
        {menuItems.map(item => (
          <li key={item.id}>{item.name} - ${item.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default MenuManagement;
