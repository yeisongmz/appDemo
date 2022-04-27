import { LOADING_DOWN, LOADING_UP, LOGEADO, SET_CLIENTES, SET_NAME, SET_PASS, SET_TOKEN, SET_USER_DATA, UNLOGIN } from './types';
import { setStorageData } from '../../services/authService';
import { BASE_URL } from '../../util/constantes';
import { postLogin, getCall } from '../../util/service';
import {message} from '../../common/message';
import { Alert } from 'react-native';

export const changeName = (val) => ({
    type: SET_NAME,
    payload: val
})

export const login = (body) => {
    return (dispatch) => {
        postLogin(`${BASE_URL}/oauth/token`, body).then(
            (res) => {
                console.log(res);
                console.log('hubo respuesta: ' + res.data.access_token)
                setStorageData('token', res.data.access_token );
                dispatch({ type: LOGEADO });
                dispatch({type: SET_TOKEN , payload: res.data.access_token})
                Alert.alert('logeado con éxito')
                //message('usuario o contraseña incorrecta');
            }
        ).catch(error => {
            console.log( error);
            if (error.response.status == 400){
                Alert.alert('usuario o contraseña no validas');
            }else if(error.code == 'ERR_NETWORK'){
                Alert.alert('error de coneccion: ' + BASE_URL);
            }
    });
    }

}

export const getClientes = (token)=> {
    return (dispatch) => {
        getCall(`${BASE_URL}/api/clientes`, token)
        .then(
            (res)=>{
                console.log(res.data);
                dispatch({type: SET_CLIENTES, payload : res.data})
            }
        ).catch(error => console.log(error));
    }
}


export const unlogin = () => ({
    type: UNLOGIN
})

export const loadingUp = () => ({
    type: LOADING_UP
})

export const loadingDown = () => ({
    type: LOADING_DOWN
})
