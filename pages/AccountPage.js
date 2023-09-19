import * as React from 'react';
import { Text, View, TextInput, useState, Button } from 'react-native';


const AccountPage = ({ navigation }) => {
    // const [value] = useState('')
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Мой Счет</Text>
            {/* <Text>{value}</Text> */}
            <TextInput
                placeholder='Введите сумму'
            />
            {/* <Button title="Положить" onPress={() => } /> */}
            {/* <Button title="Снять" onPress={() => } /> */}
            <Button title="Назад" onPress={() => navigation.goBack()} />
        </View>
    );
}


export default AccountPage;