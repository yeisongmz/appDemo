import { SET_NAME, SET_PASS, SET_USER_DATA, SET_TOKEN, LOGEADO, UNLOGIN, LOADING_DOWN, LOADING_UP, SET_CLIENTES } from '../actions/types';

const INITIAL_STORE = {

    user: null,
    pass: null,
    userData: null,
    token: null,
    logeado: false,
    loading: false,
    clientes: null
};

export default (state = INITIAL_STORE, action) => {
    switch (action.type) {
        case SET_NAME:
            return {
                ...state, user: action.payload
            };
        case SET_PASS:
            return {
                ...state, pass: action.payload
            };
        case SET_USER_DATA:
            return {
                ...state, userData: action.payload
            };
        case SET_TOKEN:
            return {
                ...state, token: action.payload
            };
        case LOGEADO:
            return {
                ...state, logeado: true, token: null
            };
        case UNLOGIN:
            return {
                ...state, logeado: false
            };
        case UNLOGIN:
            return {
                ...state, logeado: false
            };
        case LOADING_UP:
            return {
                ...state, loading: true
            }
        case LOADING_DOWN:
            return {
                ...state, loading: false
            }
        case SET_CLIENTES:
            return {
                ...state, clientes: action.payload
            }
        default:
            return state;
    }
}