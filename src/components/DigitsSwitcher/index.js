import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { userSettings } from 'const';
import { Select } from 'components/common';
import { UserSettingsContext } from 'context/UserSettingsContext';

const digits = Object.values(userSettings.digits).map(value => {
  return { label: value.toString(), value };
});

function DigitsSwitcher({ onChange, ...rest }) {
  const { userSettings, setUserSettings } = useContext(UserSettingsContext);

  const handleChange = (e) => {
    setUserSettings({
      ...userSettings, 
      digits: e.target.value 
    });

    if(onChange) onChange(e);
  }

  return (
    <Select 
      options={ digits } 
      defaultValue={ userSettings.digits } 
      onChange={ handleChange } { ...rest } />
  );
}

DigitsSwitcher.propTypes = {
  onChange: propTypes.func
}

DigitsSwitcher.displayName = 'DigitsSwitcher';

export default DigitsSwitcher;
