import React from 'react';
import classNames from 'classnames';
import './styles.scss';

function Button({ children, className, ...rest }) {

  return (
    <button className={ classNames('Button', className) } { ...rest } >
      { children }
    </button>
  );
}

Button.displayName = 'Button';

export default Button;
