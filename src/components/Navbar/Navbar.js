import React,{ useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';

const Navbar = ({setKeyword}) => {

  const {dark,toggle} = useContext(ThemeContext);

  const handleChange = e => {
    setKeyword(e.target.value);
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
    </div>
  );
};

export default Navbar;