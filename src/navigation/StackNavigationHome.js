import React from 'react';
import { Button } from 'native-base';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../components/Home';
import { unlogin } from '../redux/actions';
import { useDispatch } from 'react-redux';

const Stack = createNativeStackNavigator();

const StackNavigationHome = () => {

    const dispatch = useDispatch();
    const deslogin = () => {
        dispatch(unlogin());
    }
    return (
        <Stack.Navigator
            screenOptions={{
                //headerTitle: props => <LogoTitle {...props} />,
                headerRight: () => (
                    <Button
                        onPress={() => deslogin()}
                        color="#fff"

                    >INFO</Button>
                ),
                overlay: {
                    interceptTouchOutside: false
                  },
                  layout: {
                    backgroundColor: "transparent",
                    orientation: ["portrait"]
                  }
            }}
        >
            <Stack.Screen name='HomeScreen' component={HomeScreen} />
        </Stack.Navigator>
    );
}

export default StackNavigationHome;