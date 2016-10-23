import React from 'react';
import {Link} from 'react-router';


import './header.css';

const Header = () => {
  return (
      <nav className="navbar navbar-default">
          <ul className="nav navbar-nav">
              <li>
                  <Link activeClassName="active" href="/">Home</Link>
              </li>
              <li>
                  <Link activeClassName="active" href="/about">About</Link>
              </li>
          </ul>
      </nav>
  )
};

export default Header;