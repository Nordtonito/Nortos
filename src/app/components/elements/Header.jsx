import React from 'react';

import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <nav className="navigation">
        <Link to="/">Home page</Link>
        <Link to="/about">About</Link>
        <Link to="/not-found">ERROR 404</Link>
      </nav>
    );
  }
}

export default Header;
