import * as React from 'react';
import LoginScreen from '../components/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNavigatorLogin from './StackNavigatorLogin';
import { NativeBaseProvider } from 'native-base';


//constantes
const Tab = createBottomTabNavigator();

//funcion principal
function TabNavigationLogin() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          <Tab.Screen name="StackLogin" component={StackNavigatorLogin} />
        </Tab.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>

  );
}

export default TabNavigationLogin;