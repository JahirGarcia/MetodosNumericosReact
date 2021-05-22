import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { userSettings } from 'const';
import { Select } from 'components/common';
import { UserSettingsContext } from 'context/UserSettingsContext';

const methods = Object.entries(userSettings.method).map(([label, value]) => {
  return { label, value };
});

function MethodSwitcher({ onChange, ...rest }) {
  const { userSettings, setUserSettings } = useContext(UserSettingsContext);

  const handleChange = (e) => {
    setUserSettings({
      ...userSettings, 
      method: e.target.value 
    });

    if(onChange) onChange(e);
  }

  return (
    <Select 
      options={ methods } 
      defaultValue={ userSettings.method } 
      onChange={ handleChange } { ...rest } />
  );
}

MethodSwitcher.propTypes = {
  onChange: propTypes.func
}

MethodSwitcher.displayName = 'MethodSwitcher';

export default MethodSwitcher;
