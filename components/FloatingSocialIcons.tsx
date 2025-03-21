import React from 'react';

export const FloatingSocialIcons = () => (
  <div className="fixed bottom-10 right-10 flex flex-col gap-3 z-50">
    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="bg-blue-600 p-3 rounded-full text-white shadow-lg hover:bg-blue-700">
      <i className="fab fa-facebook-f"></i>
    </a>
    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="bg-pink-500 p-3 rounded-full text-white shadow-lg hover:bg-pink-600">
      <i className="fab fa-instagram"></i>
    </a>
    <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer" className="bg-green-500 p-3 rounded-full text-white shadow-lg hover:bg-green-600">
      <i className="fab fa-whatsapp"></i>
    </a>
    <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="bg-blue-400 p-3 rounded-full text-white shadow-lg hover:bg-blue-500">
      <i className="fab fa-telegram-plane"></i>
    </a>
  </div>
);

export default FloatingSocialIcons;