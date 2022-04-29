import React from 'react';
import { View, Text, Button } from 'native-base';

const Register = ({navigation})=>{
    return(
        <View>
            <Text>Pantalla registrarme</Text>
            <Button marginTop={5} onPress={()=> navigation.navigate('Login')} > ya tengo cuenta </Button>
            
        </View>
    )
}
export default Register;