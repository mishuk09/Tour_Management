import React from 'react';

const Header = () => {
  return (
    <header className="relative flex justify-center items-center bg-gray-800 p-4 bg-cover bg-center"
      style={{ backgroundImage: 'url(https://images.pexels.com/photos/450441/pexels-photo-450441.jpeg)' }}
    >
      {/* <img src="/logo.png" alt="Logo" className="absolute top-4 left-4 h-16" /> */}
      <h1 className="text-white text-3xl font-bold z-10">Somnath/Diu Tour</h1>
    </header>
  );
};

export default Header;
