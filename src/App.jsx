import React, { useState } from 'react';
import ItemList from './ItemList';
import AddItem from './AddItem';
import './index.css'

const App = () => {
  const [items, setItems] = useState([]);

  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const removeItem = (itemToRemove) => {
    setItems(items.filter((item) => item !== itemToRemove));
  };

  return (
    <div className='itemlist'>
      <h1 className='header'>Add and Display Items</h1>
      <AddItem addItem={addItem} />
      <ItemList items={items} removeItem={removeItem} />
    </div>
  );
};

export default App;
