import { showMessage } from "react-native-flash-message";

export function message(message) {
    console.log('se va ejecutar mostrar mensaje')
    showMessage({
        message: message,
        type: "danger",
        position: "center"
    });
};