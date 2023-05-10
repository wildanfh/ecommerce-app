import { Link } from 'react-router-dom';
import { HiOutlineShoppingCart } from 'react-icons/hi';

function Navbar() {
  return (
    <nav className="flex items-center justify-between flex-wrap py-2 px-4 sm:px-16 shadow">
      <div className="text-white mr-6">
        <Link to="/" className='flex items-center flex-shrink-0'>
          <img
            className="hidden sm:block w-16 sm:w-24 mr-2"
            src="img/logo.png"
            alt="Logo"
          />
          <span className="font-semibold text-rose-600 text-xl sm:text-3xl tracking-tight">
            Kitty Stickers
          </span>
        </Link>
      </div>
      <div className="flex items-center">
        <Link to="/cart" className="text-white">
          <HiOutlineShoppingCart className="w-7 sm:w-10 h-16 mr-1 text-rose-600" />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
