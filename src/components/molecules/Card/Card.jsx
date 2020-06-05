import React from 'react';

import Heading from '../../atoms/Heading';
import Para from '../../atoms/Para';

import './styles.scss';

const Card = () => {
  return (
    <>
      <Heading type="h1" className="card__character-title">
        Next Js Boilerplate
      </Heading>
      <Para className="card__character-para">
        Minimal Next js boilerplate.
      </Para>
    </>
  );
};

export default Card;
