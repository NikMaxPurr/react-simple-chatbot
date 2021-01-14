import React from 'react';
import PropTypes from 'prop-types';

const SubmitIcon = ({ ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={21}
    fill="#444752"
    viewBox="0 0 21 21"
    {...rest}
  >
    <path d="M4.213 9.84c-.284-.094-.286-.248.006-.345l10.388-3.467c.288-.096.453.065.373.347L12.01 16.777c-.081.288-.247.298-.37.024l-1.956-4.407 3.266-4.36-4.354 3.27L4.213 9.84z" />
  </svg>
);

SubmitIcon.propTypes = {
  size: PropTypes.number
};

SubmitIcon.defaultProps = {
  size: 20
};

export default SubmitIcon;
