export const fetchMenuItems = async () => {
    // Simulate fetching data from a real API
    return [
      { id: 1, name: 'Pizza', price: 12.99 },
      { id: 2, name: 'Pasta', price: 10.99 },
    ];
  };
  
  export const addMenuItem = async (newItem) => {
    // Simulate an API call to add a menu item
    console.log(`Added item: ${newItem}`);
  };