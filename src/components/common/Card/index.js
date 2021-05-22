import React from 'react';
import classNames from 'classnames';
import './styles.scss';

function Card({ children, className, ...rest }) {

  return (
    <div className={classNames('Card', className) } { ...rest } >
      {/* <div className="Card__head">
        Hello Bitch B)
      </div> */}
      <div className="Card__body">
        { children }
      </div>
    </div>
  );
}

Card.displayName = 'Card';

export default Card;
