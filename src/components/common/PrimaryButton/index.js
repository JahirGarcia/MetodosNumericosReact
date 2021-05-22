import React from 'react';
import classNames from 'classnames';
import './styles.scss';
import { Button } from '..';

function PrimaryButton({ children, className, ...rest }) {

  return (
    <Button className={ classNames('PrimaryButton', className) } { ...rest } >
      { children }
    </Button>
  );
}

PrimaryButton.displayName = 'PrimaryButton';

export default PrimaryButton;
