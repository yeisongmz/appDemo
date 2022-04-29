import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNavigatorLogin from './StackNavigatorLogin';
import { NativeBaseProvider } from 'native-base';
import Tabdos from '../components/Tabdos'


//constantes
const Tab = createBottomTabNavigator();

//funcion principal
function TabNavigationLogin() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            overlay: {
              interceptTouchOutside: false
            },
            layout: {
              backgroundColor: "transparent",
              orientation: ["portrait"]
            }
          }}
        >
          <Tab.Screen name="StackLogin" component={StackNavigatorLogin} />
          <Tab.Screen name="Bluetooth" component={Tabdos} />
        </Tab.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>

  );
}

export default TabNavigationLogin;