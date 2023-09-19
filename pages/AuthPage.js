import * as React from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
import RegistPage from './RegistPage'

const AuthPage = ({ navigation }) => {
    return (
        <View style={styles.container}>
             <Text style={styles.title}>Аутенфикация</Text>
            <TextInput
                style={styles.input}
                placeholder='Введите Email'
                placeholderTextColor='white'
            />
            <TextInput
                style={styles.input}
                placeholder='Введите Пароль'
                placeholderTextColor='white'

            />
            <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.navigate()}
            >
                <Text style={styles.btnText}>Ввести</Text>
            </TouchableOpacity>
            <Button
                style={styles.btnAuth}
                title="Еще нет аккаунта?"
                onPress={() => navigation.navigate(MainPage)}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
        alignItems: 'center',
        paddingVertical: 200,
    },
    title: {
        color: 'white',
        fontSize: '32px',
        fontWeight: 'bold',
    },
    input: {
        paddingVertical: 15,
        paddingHorizontal: 50,
        borderWidth: 1,
        borderColor: 'white',
        marginTop: 20,
    },
    btn: {
        paddingHorizontal: 70,
        marginTop: 20,
        borderWidth: 1,
        borderColor: 'white',
        color: 'white',
    },
    btnText: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        color: 'white',
    },

});
export default AuthPage;