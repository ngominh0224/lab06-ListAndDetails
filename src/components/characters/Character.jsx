import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Character = ({ image, name, id }) => (
  <div>
    <Link to={`/characters/${id}`}>
      <img src={image} alt={name} />
      <p>{name}</p>
    </Link>
  </div>
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Character;
