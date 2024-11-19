import React from 'react';
import Item from './Item';

const ItemList = ({ items, removeItem }) => {
  return (
    <ul className='list'>
      <h3>List of Items</h3>
      {items.map((item, index) => (
        <Item key={index} item={item} removeItem={removeItem} />
      ))}
    </ul>
  );
};

export default ItemList;
