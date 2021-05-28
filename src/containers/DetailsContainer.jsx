import React, { useState, useEffect } from 'react';
import CharacterList from '../components/characters/CharacterList';
import { fetchSingleCharacter } from '../services/heyArnoldApi';
import { useParams } from 'react-router';

const DetailsContainer = () => {
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetchSingleCharacter(params.id)
      .then(setCharacter)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <h1>Loading...</h1>;
  return (
    <div>
      <CharacterList characters={character} />
    </div>
  );
};

export default DetailsContainer;
