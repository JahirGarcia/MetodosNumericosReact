import React, { forwardRef } from 'react';
import { TextArea } from 'components/common';
import './styles.scss';

const ExpressionEditor = forwardRef((props, ref) => {

  return (
    <TextArea ref={ ref } 
      className="ExpressionEditor" 
      rows="10" 
      autoCorrect="false" 
      autoCapitalize="false" 
      spellCheck="false" 
      { ...props } />
  );
});

ExpressionEditor.displayName = 'ExpressionEditor';

export default ExpressionEditor;
