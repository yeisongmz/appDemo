import * as React from 'react';
import { NativeBaseProvider } from 'native-base';

import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import StackNavigationHome from './StackNavigationHome';

import HomeScreen from '../components/Home'


//constantes
const Tab = createBottomTabNavigator();




//funcion principal
function TabNavigationHome() {
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
          <Tab.Screen name="Home" component={StackNavigationHome} />
        </Tab.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>


  );
}

export default TabNavigationHome;