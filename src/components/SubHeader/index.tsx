import React from 'react';

import { Container } from './styles';
import Cocktail from '../../assets/cocktail-icon.png';
import Ordinary from '../../assets/ordinary-icon.png';

const SubHeader: React.FC = () => (
  <Container>
    <div className="subheader-content">
      <div className="subheader-categories">
        <p>
          <img src={Ordinary} alt="Ordinary" />
          Ordinary Drinks
        </p>
        <p>
          <img src={Cocktail} alt="Cocktail" />
          Coktails
        </p>
      </div>
      <div className="subheader-history" />
    </div>

  </Container>

);

export default SubHeader;
