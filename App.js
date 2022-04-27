import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { Store } from './store';

import RootNavigation from './src/navigation/rootNavigation';
import {useSelector } from 'react-redux';





//funcion principal
function App() {
  return (
    <Provider store={Store}>
      <RootNavigation />
    </Provider>
  );
}

export default App;