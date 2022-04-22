import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../components/Login';
import Register from '../components/Register';

const Stack = createNativeStackNavigator();

const StackNavigatorLogin = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
    );
}

export default StackNavigatorLogin;