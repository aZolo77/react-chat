import React from 'react';

const data = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

const List = () => (
  <ul>
    {data.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>
);

export default List;
