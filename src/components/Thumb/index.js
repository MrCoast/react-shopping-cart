import React from 'react';
import PropTypes from 'prop-types';

const Thumb = props => (
  <div className={props.classes}>
    <img
      src={props.src}
      alt={props.alt}
      width={props.width}
      height={props.height}
      title={props.title}
    />
  </div>
);

Thumb.propTypes = {
  alt: PropTypes.string,
  title: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  classes: PropTypes.string,
  src: PropTypes.string.isRequired
};

export default Thumb;
