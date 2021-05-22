import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { userSettings } from 'const';
import { Select } from 'components/common';
import { UserSettingsContext } from 'context/UserSettingsContext';

const anwserTypes = Object.entries(userSettings.answerType).map(([label, value]) => {
  return { label, value };
});

function AnswerTypeSwitcher({ onChange, ...rest }) {
  const { userSettings, setUserSettings } = useContext(UserSettingsContext);

  const handleChange = (e) => {
    setUserSettings({
      ...userSettings, 
      answerType: e.target.value 
    });

    if(onChange) onChange(e);
  }

  return (
    <Select 
      options={ anwserTypes } 
      defaultValue={ userSettings.answerType } 
      onChange={ handleChange } { ...rest } />
  );
}

AnswerTypeSwitcher.propTypes = {
  onChange: propTypes.func
}

AnswerTypeSwitcher.displayName = 'AnswerTypeSwitcher';

export default AnswerTypeSwitcher;
