import { Heading } from 'native-base';
import React, { useState } from 'react';
import {
    TouchableOpacity,
    ActivityIndicator,
    Text,
    View,
    Switch,
    StyleSheet,
    ScrollView,
    Alert,
    Button,
    Dimensions
} from "react-native";
import {
    BluetoothEscposPrinter,
    BluetoothManager,
    BluetoothTscPrinter
} from "../../java_modules/tp-react-native-bluetooth-printer";

import { conecct, printText, printQr, printImage, printlabel, obtenerTexto, unpair, disconnect } from '../util/BluetoothComponent';




const { height, width } = Dimensions.get('window');


const Tabdos = () => {


    const [data, setData] = useState({
        enabled: false,
        devices: null,
        pairedDs: [],
        foundDs: [],
        loading: false,
        boundAddress: '',
        debugMsg: ''
    });


    const toggleSwitch = (v) => {
        setData({ ...data, enabled: !data.enabled });
        if (!v) {
            BluetoothManager.disableBluetooth().then(() => {
                setData({
                    ...data,
                    enabled: false,
                    loading: false,
                    foundDs: [],
                    pairedDs: []
                });
            }, (err) => { alert(err) });
        } else {
            BluetoothManager.enableBluetooth().then((r) => {
                console.log(r);
                console.log('antes de esta linea');
                var paired = [];
                if (r && r.length > 0) {
                    for (var i = 0; i < r.length; i++) {
                        try {
                            paired.push(JSON.parse(r[i]));
                        } catch (e) {
                            //ignore
                        }
                    }
                }
                setData({
                    ...data,
                    enabled: true,
                    loading: false,
                    pairedDs: paired
                })
            }, (err) => {
                setData({
                    ...data,
                    loading: false
                })
                Alert.alert('no se pudo activar el bluetooth');
            });
        }

    };

    const scan = () => {
        setData({
            ...data,
            loading: true
        })
        //escanea dispositivos disponibles para emparejar
        BluetoothManager.scanDevices()
            .then((s) => {
                console.log(s);
                var ss = JSON.parse(s);//JSON string
                console.log(ss.found);
                setData({
                    ...data,
                    pairedDs: ss.paired,
                    foundDs: ss.found,
                    loading: false
                });
            }, (er) => {
                setData({
                    ...data,
                    loading: false
                })
                Alert.alert('error' + JSON.stringify(er));
            });
        console.log(data);


    }
    const close = () => {
        disconnect();
    }


    const renderRow = (rows) => {
        let items = [];
        for (let i in rows) {
            let row = rows[i];
            if (row.address) {
                items.push(
                    <TouchableOpacity key={new Date().getTime() + i} style={styles.wtf} onPress={async () => {
                        setData({
                            ...data,
                            loading: true
                        });
                        await BluetoothManager.connect(row.address)
                            .then((s) => {
                                setData({
                                    ...data,
                                    loading: false,
                                    boundAddress: row.address,
                                    name: row.name || "UNKNOWN"
                                })
                            }, (e) => {
                                setData({
                                    ...data,
                                    loading: false
                                })
                                Alert.alert(e);
                            })

                    }}><Text style={styles.name}>{row.name || "UNKNOWN"}</Text><Text
                        style={styles.address}>{row.address}</Text></TouchableOpacity>
                );
            }
        }
        return items;
    }

    return (
        <ScrollView style={styles.container}>
            <Text>{data.debugMsg}</Text>
            <Text style={styles.title}>Blutooth:{data.enabled ? " habilitado" : " deshabilitado"}</Text>
            <View>
                <Heading marginTop={10}>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={data.enabled ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={(v) => toggleSwitch(v)}
                        value={data.enabled}
                    />
                    <Button
                        disabled={data.loading || !data.enabled}
                        onPress={() => { scan() }} title="Scan"
                    />
                    {/* <Button
                        disabled={data.loading || !data.enabled}
                        onPress={() => close()}
                        title="disconect"
                    /> */}
                    <Text>{data.boundAddress}</Text>
                </Heading>
            </View >
            <View>
                <Text style={styles.title}>Connected:<Text style={{ color: "blue" }}>{!data.name ? 'No Devices' : data.name}</Text></Text>
                <Text style={styles.title}>Found(tap to connect):</Text>
                {data.loading ? (<ActivityIndicator animating={true} />) : null}
                <View style={{ flex: 1, flexDirection: "column" }}>
                    {
                        renderRow(data.foundDs)
                    }
                </View>
            </View>
            <View>
                <Text style={styles.title}>Paired:</Text>
                {data.loading ? (<ActivityIndicator animating={true} />) : null}
                <View style={{ flex: 1, flexDirection: "column" }}>
                    {
                        renderRow(data.pairedDs)
                    }
                </View>
            </View>

            <Button marginTop={2} onPress={() => conecct()} title="conec" >  </Button>
            <Button marginTop={2} onPress={() => printText()} title="text" >  </Button>
            <Button marginTop={5} onPress={() => printQr()} title="QR">  </Button>
            <Button marginTop={5} onPress={() => printImage()} title="image">  </Button>


        </ScrollView>
    );
}

export default Tabdos;




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        flex: 1,
    },

    title: {
        width: width,
        backgroundColor: "#eee",
        color: "#232323",
        paddingLeft: 8,
        paddingVertical: 4,
        textAlign: "left"
    },
    wtf: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    name: {
        flex: 1,
        textAlign: "left"
    },
    address: {
        flex: 1,
        textAlign: "right"
    }
});


