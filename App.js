import  React, {useState} from 'react';
import { View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import TabNavigationLogin from './src/navigation/TabNavigatorLogin';
import TabNavigationHome from './src/navigation/TabNavigatorHome';


//componentes



//constantes





//funcion principal
function App() {
  const [logeado, setLogeado] = useState(false);
  return (

      logeado ? <TabNavigationHome/> :  <TabNavigationLogin/>

  );
}

export default App;