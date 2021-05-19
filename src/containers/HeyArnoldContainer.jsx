import React, { useState, useEffect } from 'react';
import CharacterList from '../components/characters/CharacterList';
import { getAllCharacters } from '../services/heyArnoldApi';

const HeyArnoldContainer = () => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getAllCharacters(page)
      .then(setCharacters)
      .finally(() => setLoading(false));
  }, [page]);

  if (loading) return <h1>Loading...</h1>;

  return (
    <section>
      <button onClick={() => setPage((prevPage) => prevPage + 1)}>
        {page}
      </button>
      <CharacterList characters={characters} />
    </section>
  );
};

export default HeyArnoldContainer;
