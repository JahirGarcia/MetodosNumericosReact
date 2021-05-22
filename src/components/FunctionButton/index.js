import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';
import { Button } from '../common';
import './styles.scss';

function FunctionButton({ func, onClick, className, ...rest }) {

  const handleClick = (e) => {
    if(onClick) onClick(func, e);
  }

  return (
    <Button className={ classNames('FunctionButton', className) } onClick={ handleClick } { ...rest } >
      {
        func?.label &&
        (
          func.label instanceof Function?
            func.label()
          :
            func.label
        )
      }
    </Button>
  );
}

FunctionButton.propTypes = {
  func: propTypes.shape({
    label: propTypes.oneOfType([
      propTypes.string,
      propTypes.func
    ]).isRequired,
    func: propTypes.string.isRequired
  }), 
  onClick: propTypes.func
};

FunctionButton.displayName = 'FunctionButton';

export default FunctionButton;
