import React from 'react';
import classNames from 'classnames';
import './styles.scss';

function Td({ children, className, ...rest }) {

  return (
    <td className={ classNames('Table__cell', className) } { ...rest} >
      { children }
    </td>
  );
}

Td.displayName = 'Td';

export default Td;
