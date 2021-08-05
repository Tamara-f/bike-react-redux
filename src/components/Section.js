import React from 'react';
import PropTypes from 'prop-types';

function Section({ children }) {
  return <section className='cover'>{children}</section>;
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Section;
