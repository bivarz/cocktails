import React from 'react';

import './styles.scss';

const Header: React.FC = () => (
  <section className="header_container">
    <div className="header_logo">
      <a href="/">
        <img src="https://www.thecocktaildb.com/images/logo.png" alt="logomarca" />
      </a>
    </div>
  </section>

);

export default Header;
