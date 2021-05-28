import React, { useState, useEffect } from 'react';
import CharacterList from '../components/characters/CharacterList';
import { getAllCharacters } from '../services/heyArnoldApi';

const HeyArnoldContainer = () => {
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    getAllCharacters()
      .then(setCharacter)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <h1>Loading...</h1>;

  return (
    <section>
      <CharacterList characters={character} />
    </section>
  );
};

export default HeyArnoldContainer;
