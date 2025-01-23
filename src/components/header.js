import React from 'react';

function Header() {
  return (
    <header style={headerStyle}>
      <h1>My React App</h1>
      <nav>
        <ul style={navStyle}>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

const headerStyle = {
  background: '#333',
  color: '#fff',
  padding: '10px 20px',
  textAlign: 'center',
};

const navStyle = {
  listStyle: 'none',
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
};

export default Header;
