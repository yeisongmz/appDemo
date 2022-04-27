import React, { useState } from 'react';
import { Alert } from 'react-native';
import {
  Center,
  Box,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  HStack,
  ScrollView,
  Text
} from 'native-base';

import { useDispatch } from 'react-redux';
import { login, changeName } from '../redux/actions'
import { message } from '../common/message';
import { showMessage } from "react-native-flash-message";


//componentes

const LoginScreen = ({ navigation }) => {

  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const submit = () => {
    let body = {};
    body.correo = correo
    body.password = password;
    if (body.user != '' && body.password != '') {
      dispatch(login(body));
      dispatch(changeName(correo));
    }else {
      Alert.alert('usuario o contraseña no pueden quedar vacios');
    }
  }
  const updateValues = (text, field) => {
    if (field == 'correo') {
      setCorreo(text);
    } else {
      setPassword(text);
    }
  }
  return (
    <ScrollView>
      <Center w="100%">

        <Box safeArea p="2" py="8" w="90%" maxW="290">
          <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
            color: "warmGray.50"
          }}>
            Bienvenido
          </Heading>
          <Heading mt="1" _dark={{
            color: "warmGray.200"
          }} color="coolGray.600" fontWeight="medium" size="xs">
            Inicia sesión para continuar!
          </Heading>

          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>Correo</FormControl.Label>
              <Input uppercase _focus={true} onChangeText={(text) => { updateValues(text, 'correo') }} isRequired={true}/>
            </FormControl>
            <FormControl>
              <FormControl.Label>Contraseña</FormControl.Label>
              <Input type="password" onChangeText={(text) => { updateValues(text, 'password') }} isRequired={true}/>
              <Link _text={{
                fontSize: "xs",
                fontWeight: "500",
                color: "indigo.500"
              }} alignSelf="flex-end" mt="1">
                Recuperar contraseña?
              </Link>
            </FormControl>
            <Button mt="2" colorScheme="indigo" onPress={() => submit()}>
              Iniciar Sesión
            </Button>
            <HStack mt="6" justifyContent="center">
              <Text fontSize="sm" color="coolGray.600" _dark={{
                color: "warmGray.200"
              }}>
                Soy usuario nuevo.{" "}
              </Text>
              <Link _text={{
                color: "indigo.500",
                fontWeight: "medium",
                fontSize: "sm"
              }} onPress={() => navigation.navigate('Register')}>
                Registrarme
              </Link>
            </HStack>
          </VStack>
        </Box>

      </Center>
    </ScrollView>
  )
};
export default LoginScreen;