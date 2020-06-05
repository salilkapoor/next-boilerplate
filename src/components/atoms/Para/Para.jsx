import React from 'react';
import PropTypes from 'prop-types';

const Para = ({
  className, children
}) => React.createElement(
  'p',
  {
    className
  },
  children
);

Para.defaultProps = {
  className: ''
};

Para.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string.isRequired
};

export default Para;
