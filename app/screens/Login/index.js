import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const LoginScreen = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('email: ' + email);
        console.log('password: ' + password);
    };


    return (
        <View>
            <TextInput
                style={styles.input}
                onChangeText={(email) => setEmail(email)}
            />

            <TextInput
                style={styles.input}
                onChangeText={(password) => setPassword(password)}
                secureTextEntry={true}
            />

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text>Press Here</Text>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
    },
});


export default LoginScreen;