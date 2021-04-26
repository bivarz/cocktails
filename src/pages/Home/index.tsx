import React, { useCallback, useEffect, useState } from 'react';

import axios from 'axios';
import { Container } from './styles';
import Loading from '../../components/Loading/index';

interface CocktailData {
  strAlcoholic: string,
  strDrink: string,
  strDrinkThumb: string;
  idDrink?: string
}

const Home: React.FC = () => {
  const [info, setInfo] = useState<[CocktailData]>();
  const [inputValue, setInputValue] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const getDrinks = useCallback(async (value: string) => {
    setLoading(true);
    const dataInfo = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`);
    const { data } = dataInfo;
    setInfo(data.drinks);
    setLoading(false);
  }, []);

  useEffect(() => {
    getDrinks(inputValue);
  }, [getDrinks, inputValue]);

  return (!loading ? (
    <Container>
      <div>
        {info?.map((drink) => (
          <div key={drink.idDrink}>
            <li>
              <img src={drink.strDrinkThumb} alt="" />
              <strong>{drink.strDrink}</strong>
            </li>
            <button type="button">View</button>
          </div>
        ))}
      </div>
    </Container>
  ) : <Loading />);
};
export default Home;
