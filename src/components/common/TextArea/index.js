import React, { forwardRef } from 'react';
import classNames from 'classnames';
import './styles.scss';

const TextArea = forwardRef(({ className, ...rest }, ref) => {

  return <textarea ref={ ref } className={ classNames('TextArea', className) } { ...rest } />
});

TextArea.displayName = 'TextArea';

export default TextArea;
