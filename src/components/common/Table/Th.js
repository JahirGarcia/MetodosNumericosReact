import React from 'react';
import classNames from 'classnames';
import './styles.scss';

function Th({ children, className, ...rest }) {

  return (
    <th className={ classNames('Table__cell', className) } { ...rest} >
      { children }
    </th>
  );
}

Th.displayName = 'Th';

export default Th;
