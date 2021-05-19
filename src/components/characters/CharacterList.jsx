import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';
import { Link } from 'react-router-dom';

const CharacterList = ({ characters }) => {
  return (
    <ul aria-label="characters">
      {characters.map((character) => (
        <Link to={`characters/${character.id}`} key={character.id}>
          <li>
            <Character
              name={character.name}
              image={character.image}
            />
          </li>
        </Link>
      ))}
    </ul>
  );
};

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CharacterList;
