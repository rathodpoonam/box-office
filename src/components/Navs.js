import React from 'react';
import { Link } from 'react-router-dom';
const LINKS = [
  { text: 'Home', to: '/' },

  { text: 'Starred', to: '/starred' },
];
const Navs = () => {
  return (
    <div>
      <ul>
        {LINKS.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.to}>{item.text}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navs;
