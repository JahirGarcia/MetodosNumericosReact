import React from 'react';
import classNames from 'classnames';
import './styles.scss';
import { Button } from '..';

function SecondaryButton({ children, className, ...rest }) {

  return (
    <Button className={ classNames('SecondaryButton', className) } { ...rest } >
      { children }
    </Button>
  );
}

SecondaryButton.displayName = 'SecondaryButton';

export default SecondaryButton;
