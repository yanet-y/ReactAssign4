import React from 'react';

const Item = ({ item, removeItem }) => {
  return (
    <li >
      {item} 
      <button className='delete' onClick={() => removeItem(item)}>Delete</button>
    </li>
  );
};

export default Item;
