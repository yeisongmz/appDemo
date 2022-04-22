import * as React from 'react';
import { View, Text } from 'react-native';
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
    ScrollView
} from 'native-base';

//componentes

const LoginScreen = ({navigation}) => {
    
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
              <Input />
            </FormControl>
            <FormControl>
              <FormControl.Label>Contraseña</FormControl.Label>
              <Input type="password" />
              <Link _text={{
              fontSize: "xs",
              fontWeight: "500",
              color: "indigo.500"
            }} alignSelf="flex-end" mt="1">
                Recuperar contraseña?
              </Link>
            </FormControl>
            <Button mt="2" colorScheme="indigo" onPress={()=> console.log('iniciar sesión')}>
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
          }} onPress={()=> navigation.navigate('Register') }>
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