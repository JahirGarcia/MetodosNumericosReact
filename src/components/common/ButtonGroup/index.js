import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';
import './styles.scss';

function ButtonGroup({ children, className, ...rest }) {

  return (
    <div className={ classNames('ButtonGroup', className) } { ...rest } >
      { children }
    </div>
  );
}

ButtonGroup.propTypes = {
  children: propTypes.arrayOf(propTypes.element)
}

ButtonGroup.displayName = 'ButtonGroup';

export default ButtonGroup;
