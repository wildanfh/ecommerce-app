import React from 'react';
import { FaHeart } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-rose-600 text-rose-200 py-4 mt-16">
      <div className="container mx-auto">
        <p className="text-center">
          &copy; 2023  <a href='https://github.com/wildanfh' className='underline'>wildanfh</a>. All rights reserved. Made with <FaHeart className="inline-block text-rose-200 align-text-top" />
        </p>
      </div>
    </footer>
  );
}

export default Footer;
