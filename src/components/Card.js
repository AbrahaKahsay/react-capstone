import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Card = (props) => {
  const {
    id,
    symbol,
    price,
  } = props;

  return (
    <NavLink className="card" to={`/detail/${id}`}>
      <h2>{symbol}</h2>
      <small>{id}</small>
      <p>
        $
        {price}
      </p>
    </NavLink>
  );
};

export default Card;

Card.propTypes = {
  id: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};
