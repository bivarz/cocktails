import React, {
  useRef, useCallback, FormEvent,
} from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import { Container } from './styles';

const Search: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();
  }, []);

  return (
    <Container>
      <form className="search-input-area" onSubmit={handleSubmit}>
        <button type="submit">
          <AiOutlineSearch size={24} />
        </button>
        <input type="text" ref={inputRef} />
      </form>
    </Container>
  );
};

export default Search;
