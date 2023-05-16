import { Link } from "react-router-dom";

import './Navbar.css'

const Navbar = () => {
    return (
      <>
        <div className="text-center mt-10">
          <Link to='/'>
            <button id="btn" className="btn glass h-20 w-96 text-lg font-bold text-white">
              Chocolate Management System
            </button>
          </Link>
        </div>
      </>
    );
};

export default Navbar;