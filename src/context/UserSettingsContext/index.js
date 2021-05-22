import { userSettings } from 'const';
import { createContext, useEffect, useState } from 'react';
import { useLocalStorage } from 'react-use';

const intitialState = {
  mode: userSettings.mode.RADIANES, 
  digits: userSettings.digits.VEINTIDOS, 
  answerType: userSettings.answerType.DECIMAL, 
  method: userSettings.method.BISECCION 
};

export const UserSettingsContext = createContext(intitialState);
UserSettingsContext.displayName = 'UserSettingsContext';

function UserSettingsProvider({ children }) {
  const setUserSettings = (settings) => {
    setState({
      ...state,
      userSettings: settings,
    });
  }

  const [value, setValue] = useLocalStorage('userSettings', intitialState);
  const [state, setState] = useState({
    userSettings: value,
    setUserSettings
  });

  useEffect(() => {
    setValue(state.userSettings);
  }, [state, setValue]);

  return (
    <UserSettingsContext.Provider value={ state } >
      { children }
    </UserSettingsContext.Provider>
  )
}

UserSettingsProvider.displayName = 'UserSettingsProvider';

export default UserSettingsProvider;
