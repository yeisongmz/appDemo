import React from "react";
import { Heading, Box, FlatList, HStack, Avatar, Text, VStack, Spacer } from "native-base";
import {Alert} from 'react-native'
import { BluetoothComponent } from "../util/BluetoothComponent";


const FatlistComponent = (props) => {
    const datas = props.data
    const data = [{
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        fullName: "Aafreen Khan",
        timeStamp: "12:47 PM",
        recentText: "Good Day!",
        avatarUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    }];

    const entrar = (item) => {
        //Alert.alert(item.nombre, `${item.email}`)
        BluetoothComponent();
    }
    return (
        <Box>
            <FlatList data={datas} renderItem={({
                item
            }) =>  <Box  borderBottomWidth="1" _dark={{
                borderColor: "gray.600"
            }} borderColor="coolGray.200" pl="4" pr="5" py="2">
                    <HStack space={3} justifyContent="space-between">
                        
                        <VStack>
                            <Text onPress={()=> entrar(item)} _dark={{
                                color: "warmGray.50"
                            }} color="coolGray.800" bold>
                                {item.nombre}
                            </Text>
                            <Text color="coolGray.600" _dark={{
                                color: "warmGray.200"
                            }}>
                                {item.email}
                            </Text>
                        </VStack>
                        <Spacer />
                        <Text fontSize="xs" _dark={{
                            color: "warmGray.50"
                        }} color="coolGray.800" alignSelf="flex-start">
                            {item.createAt}
                        </Text>
                    </HStack>
                </Box>} keyExtractor={item => item.id} />
        </Box>
    )
};

export default FatlistComponent;