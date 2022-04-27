import axios from "axios";
import { Buffer } from 'buffer';

axios.defaults.timeout = 5000;


axios.interceptors.request.use(function (config) {
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

export function postLogin(url, body) {

    const credenciales = 'angularapp' + ':' + '12345';
    const buff = new Buffer.from(credenciales);
    const credencialesbase64 = buff.toString('base64');

    let params = new URLSearchParams();
    params.append('grant_type', 'password');
    params.append('username', body.correo);
    params.append('password', body.password);

    return axios({
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + credencialesbase64
        },
        method: 'POST',
        url: url,
        data: params.toString()
    });
}

export function getCall(url, token){
    return axios({
        method: 'GET',
        url: url,
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
}


export function postCall(url, body) {
    return axios({
        method: 'POST',
        url: url,
        data: body
    })
}