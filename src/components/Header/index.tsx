/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useState } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import Search from '../Search';
import Logo from '../../assets/cocktails-logo.png';

import { Container } from './styles';

const Header: React.FC = () => {
  const [hasFavorites, setHasFavorite] = useState(false);

  return (
    <Container>
      <div className="header-content">
        <div className="header-logo">
          <img src={Logo} alt="logo" />
        </div>
        <aside className="header-aside">
          <Search />
          <div className="header-favorite-area">
            {hasFavorites
              ? (<button type="button" onClick={() => setHasFavorite(!hasFavorites)}> <AiFillStar size={24} color="#ce2b9d" /></button>)
              : (<button type="button" onClick={() => setHasFavorite(!hasFavorites)}> <AiOutlineStar size={24} color="fff" /></button>)}
          </div>
        </aside>

      </div>

    </Container>
  );
};

export default Header;
