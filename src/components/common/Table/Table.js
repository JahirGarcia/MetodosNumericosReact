import React from 'react';
import classNames from 'classnames';
import './styles.scss';

function Table({ children, className, ...rest }) {

  return (
    <table className={ classNames('Table', className) } { ...rest} >
      { children }
    </table>
  );
}

Table.displayName = 'Table';

export default Table;
