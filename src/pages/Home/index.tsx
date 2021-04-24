import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { Container } from './styles';

interface CocktailData {

  strAlcoholic: string,
  strDrink: string,
  strDrinkThumb: string;
}

const Home: React.FC = () => {
  const [info, setInfo] = useState<[CocktailData]>();

  async function get() {
    const dataInfo = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=mo ');
    const { data } = dataInfo;
    console.log(data);
    setInfo(data.drinks);
  }
  useEffect(() => {
    get();
  }, []);
  return (
    <Container>
      {info?.map((drink) => (
        <li>
          <img src={drink.strDrinkThumb} alt="" />
          <strong>{drink.strDrink}</strong>
          <p>{drink.strAlcoholic}</p>
        </li>
      ))}
    </Container>

  );
};

export default Home;
