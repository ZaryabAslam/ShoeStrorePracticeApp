import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {

  return (
	<div className="navhead">
        <Link className="link1" to="/"> Home </Link>
        <Link className="link1" to="/about"> About </Link>
        <Link className="link1" to="/product"> Product </Link>
	</div>
  );
}

export default NavBar;