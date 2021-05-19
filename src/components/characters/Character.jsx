import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ image, name }) => {
  return (
    <div>
      <img src={image} alt={name} />
      <p>{name}</p>
    </div>
  );
};

Character.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Character;
