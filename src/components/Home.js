import React, {useEffect, useState} from 'react';
import {
    Center, 
    Box, 
    Heading,
    Text
} from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import { getClientes } from '../redux/actions';
import FatlistComponent from './FlatlistComponent';


const HomeScreen = () => {
  const {user,token, logeado, clientes} = useSelector(state => state.auth);
  const distpach = useDispatch();

    useEffect(()=>{
      if(token != ''){
        distpach(getClientes(token));
      }
    }, [])
    
    return ( 
        <Center w="100%">

        {clientes ? <FatlistComponent data={clientes}/> : null}
    </Center>
     );
}
export default HomeScreen;