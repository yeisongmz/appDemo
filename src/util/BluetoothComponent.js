import { Alert } from 'react-native'
import {
    BluetoothManager,
    BluetoothEscposPrinter,
    BluetoothTscPrinter,
} from "tp-react-native-bluetooth-printer";

import RNFS from 'react-native-fs';
import { base64Image, base64Jpg, base64JpgLogo } from './constantestwo';


const sprt = 'DC:0D:30:14:6B:5F'
const golink = 'DC:0D:30:CC:F5:8E'

const selectImpre = sprt

export const conecct = () => {
    console.log('intentando conectar');
    BluetoothManager.connect(selectImpre) // the device address scanned.
        .then(
            (s) => {
                console.log(s)
            },
            (e) => {

            }
        );
};

export const disconec = () => {
    BluetoothManager.disconnect(selectImpre)
        .then((s) => {
            console.log('then')
            console.log(s)
        }).catch((e) => {
            console.log('then')
            console.log(e)
        })
}

export const printlabel = async () => {
    let options = {
        width: 40,
        height: 30,
        gap: 20,
        direction: BluetoothTscPrinter.DIRECTION.FORWARD,
        reference: [0, 0],
        tear: BluetoothTscPrinter.TEAR.ON,
        sound: 0,
        text: [{
            text: 'I am a testing txt',
            x: 20,
            y: 0,
            fonttype: BluetoothTscPrinter.FONTTYPE.SIMPLIFIED_CHINESE,
            rotation: BluetoothTscPrinter.ROTATION.ROTATION_0,
            xscal: BluetoothTscPrinter.FONTMUL.MUL_1,
            yscal: BluetoothTscPrinter.FONTMUL.MUL_1
        }, {
            text: '你在说什么呢?',
            x: 20,
            y: 50,
            fonttype: BluetoothTscPrinter.FONTTYPE.SIMPLIFIED_CHINESE,
            rotation: BluetoothTscPrinter.ROTATION.ROTATION_0,
            xscal: BluetoothTscPrinter.FONTMUL.MUL_1,
            yscal: BluetoothTscPrinter.FONTMUL.MUL_1
        }],
        qrcode: [{ x: 20, y: 96, level: BluetoothTscPrinter.EEC.LEVEL_L, width: 3, rotation: BluetoothTscPrinter.ROTATION.ROTATION_0, code: 'show me the money' }],
        barcode: [{ x: 120, y: 96, type: BluetoothTscPrinter.BARCODETYPE.CODE128, height: 40, readable: 1, rotation: BluetoothTscPrinter.ROTATION.ROTATION_0, code: '1234567890' }],
        image: [{ x: 160, y: 160, mode: BluetoothTscPrinter.BITMAP_MODE.OVERWRITE, width: 60, image: base64Image }]
    }

    BluetoothTscPrinter.printLabel(options).then(
        (s) => {
            console.log(s)
        },
        (err) => {
            console.log(err)
        }
    );
}

export const obtenerTexto = () => {
    let texto = '';
    const salto = '\n'
    texto = texto.concat('ORIGINAL CLIENTE' + salto);
    texto = texto.concat('LA DISCIPLINA S.A' + salto);
    texto = texto.concat('Bernardino Caballero c/ Pedro J. Caballero' + salto);
    texto = texto.concat('   Tel: 021 642332' + salto);
    texto = texto.concat('   RUC: 80090045-6' + salto)
    texto = texto.concat('   Timbrado: 15188295' + salto)
    texto = texto.concat('Val. Desde: 01/11/2021' + salto)
    texto = texto.concat('Val. Hasta: 30/11/2022' + salto)
    texto = texto.concat('Factura Contado' + salto)
    texto = texto.concat('  Nro. 001-002-0001254' + salto)
    texto = texto.concat('Fecha: 22/04/2022' + salto)
    texto = texto.concat('Hora: 19:46:44' + salto)
    texto = texto.concat('----------Cliente----------' + salto)
    texto = texto.concat('Cta. Cte: 27-7373-27/00' + salto)
    texto = texto.concat('  R.U.C.: 5857754' + salto)
    texto = texto.concat('ESPINOLA, LUIS B./ FARIÑA, BLANCA' + salto)
    texto = texto.concat('---------------------------' + salto)
    texto = texto.concat('Meses pagados:' + salto)
    texto = texto.concat('MAY/2022 a MAY/2022' + salto)
    texto = texto.concat('Tasa(10%)       :Gs.34.3500' + salto)
    texto = texto.concat('Recargo(10%)    :Gs.0' + salto)
    texto = texto.concat('Total Pago      :Gs.34500' + salto)
    texto = texto.concat('Exenta          :Gs.0' + salto)
    texto = texto.concat('Grav. 5%' + salto)
    texto = texto.concat('Grav. 10%       :Gs.3.136' + salto)
    texto = texto.concat('Total I.V.A     :Gs.3136' + salto)
    texto = texto.concat('----------Cobrador----------' + salto)
    texto = texto.concat('MALDONADO VILLALBA HUGO JAVIER(148)' + salto)
    texto = texto.concat('Firma:....................' + salto)
    texto = texto.concat('\n\r' + salto)
    texto = texto.concat('Los datos impresos requieren de cuidados especiales. Para ello evite el contacto directo con plasticos, solventes de productos quimicos. Evite tambien la exposicion al calor y humedad, luz solar o lamparas fluorescentes' + salto)
    texto = texto.concat('' + salto)
    //texto = texto.concat(salto + salto + texto)
    console.log(texto);
    return texto
}


export const printText =  () => {

    BluetoothManager.connect(selectImpre) // the device address scanned.
        .then(
            (s) => {
                console.log('entró en .then')
                const saltos = '\n\r\n\r\n\r\n\r\n\r'
                const texto = obtenerTexto()
                 BluetoothEscposPrinter.printText(texto, {
                    codepage: 255
                });
                 printQr();
                 BluetoothEscposPrinter.printText(saltos, {})
                 BluetoothEscposPrinter.printText(texto, {
                });
                 printQr();

                 BluetoothEscposPrinter.printText(saltos, {});
                 disconec()
            },
            (e) => {

            }
        );



    //return disconec();
};



export const printQr = async (qrCodeWidth = 250, leftPadding = 60) => {
    return await BluetoothEscposPrinter.printQRCode(
        'qrCodeText',
        qrCodeWidth,
        BluetoothEscposPrinter.ERROR_CORRECTION.H,
        leftPadding
    );
}

export const printImage = async () => {

    return await BluetoothEscposPrinter.printPic(base64JpgLogo, {
        width: 384,
        left: 0,
    });
};


