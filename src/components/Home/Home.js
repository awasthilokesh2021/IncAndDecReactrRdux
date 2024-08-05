import React from 'react';

const Home = ({ store, item }) => {
  return (
    <div>
      <h1>My name is {store}</h1>
      <button onClick={item}>{store}</button>
    </div>
  );
};

export default Home;
