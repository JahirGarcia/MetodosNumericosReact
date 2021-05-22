import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';
import './styles.scss';

function Select({ options, className, ...rest }) {

  return (
    <select className={ classNames('Select', className) } { ...rest } >
      {
        options?.map((option, index) => {
          return (
            <option className="Select__option" value={ option.value } key={ index } >
              { option.label }
            </option>
          );
        })
      }
    </select>
  );
}

Select.propTypes = {
  options: propTypes.arrayOf(propTypes.shape({
    value: propTypes.any.isRequired,
    label: propTypes.string.isRequired
  })).isRequired,
};

Select.displayName = 'Select';

export default Select;
