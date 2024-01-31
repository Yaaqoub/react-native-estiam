import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import {useAuth} from '../../hooks/use-auth';

const LoginScreen = () => {
    const { signIn } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            await signIn(email, password);
        } catch (e) {
            console.log(e);
        }
    };


    return (
        <View>
            <TextInput
                style={styles.input}
                onChangeText={(email) => setEmail(email)}
                placeholder="Email"
            />

            <TextInput
                style={styles.input}
                onChangeText={(password) => setPassword(password)}
                secureTextEntry={true}
                placeholder="Password"
            />

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.loginText}>Login</Text>
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
        padding: 15,
    },
    loginText: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});


export default LoginScreen;
