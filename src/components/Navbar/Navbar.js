import React,{ useContext } from 'react';
import { Link } from 'react-router-dom';
import ThemeContext from '../../context/ThemeContext';
import { useDispatch } from 'react-redux';
import { setKeyword } from '../../action';


const Navbar = () => {
  const {dark,toggle} = useContext(ThemeContext);
  const dispatch = useDispatch()

  const handleChange = e => {
    dispatch(setKeyword(e.target.value));
  }

  return (
    <div className="nav-bar">
      <span>
        My Shop 
        { dark ? ' Dark' : ' Light' }
      </span>
      <input type="text" placeholder="search" 
              onChange={handleChange}  />
      <button onClick={toggle}>
        Change Theme
      </button>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/checkout">Checkout</Link>
      </div>
    </div>
  );
};

export default Navbar;