import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { userSettings } from 'const';
import { Select } from 'components/common';
import { UserSettingsContext } from 'context/UserSettingsContext';

const modes = Object.entries(userSettings.mode).map(([label, value]) => {
  return { label, value };
});

function ModeSwitcher({ onChange, ...rest }) {
  const { userSettings, setUserSettings } = useContext(UserSettingsContext);

  const handleChange = (e) => {
    setUserSettings({
      ...userSettings, 
      mode: e.target.value 
    });

    if(onChange) onChange(e);
  }

  return (
    <Select 
      options={ modes } 
      defaultValue={ userSettings.mode } 
      onChange={ handleChange } { ...rest } />
  );
}

ModeSwitcher.propTypes = {
  onChange: propTypes.func
}

ModeSwitcher.displayName = 'ModeSwitcher';

export default ModeSwitcher;
