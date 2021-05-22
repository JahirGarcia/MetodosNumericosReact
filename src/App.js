import UserSettingsProvider from 'context/UserSettingsContext';
import React from 'react';
import Raices from 'views/Raices';

function App() {

  return (
    <UserSettingsProvider>
      <Raices />
    </UserSettingsProvider>
  );
}

export default App;
