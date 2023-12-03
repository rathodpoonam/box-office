import React, { useState } from 'react';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const onInputChnage = e => {
    setInputValue(e.target.value);
  };
  return (
    <div>
      <input type="text" value={inputValue} onChange={onInputChnage} />
    </div>
  );
};

export default Home;
