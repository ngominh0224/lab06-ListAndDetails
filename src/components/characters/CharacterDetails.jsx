import React from 'react';
import PropTypes from 'prop-types';

const CharacterDetails = ({ character }) => (
  <div data-testid="character-div">
    <img src={character.image} alt={character.name} />
    <p>{character.name}</p>
  </div>
);

CharacterDetails.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default CharacterDetails;
