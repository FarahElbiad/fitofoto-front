import React from 'react';
import { Link } from 'react-router-dom';


const menuItems = [
  { title: 'Home', link: '/' },
  { title: 'About', link: '/about' },
  { title: 'Contact', link: '/contact' },
];

function Header() {
  return (
    <div className="z-10 font-sans antialiased sticky top-4 w-full" style={{ marginTop: '-106.5px' }}>
      <div className="relative flex items-center justify-between flex-wrap bg-white p-3 m-4 rounded-lg drop-shadow-lg z-10">
        <div className="relative flex items-center flex-no-shrink text-white mr-6">
          <Link to="/">
            <span className="absolute flex h-fit w-fit top-1 left-1">
              <span className="animate-ping absolute inline-flex h-10 w-10 rounded-xl bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-transparent"></span>
            </span>
            <img src="/images/1567-526-max.png" height="150px" width="150px" alt="none" />
          </Link>
        
        </div>
        <div className="block sm:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="sm:flex sm:items-center sm:w-auto justify-end">
          <div className="text-sm sm:flex-grow">
            {menuItems.map((item, index) =>
              item.title === 'Home' ? (
                <Link
                  key={index}
                  to={item.link}
                  className="block mt-4 sm:inline-block sm:mt-0 text-white mr-4 bg-green-500 hover:bg-green-400 hover:text-white rounded-lg px-4 py-2"
                >
                  {item.title}
                </Link>
              ) : (
                <Link
                  key={index}
                  to={item.link}
                  className="block mt-4 sm:inline-block sm:mt-0 text-black  hover:text-green-400 mr-4 hover:text-white rounded-lg px-4 py-2"
                >
                  {item.title}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
