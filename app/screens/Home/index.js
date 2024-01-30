import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Home screen</Text>
            <Button
                onPress={() => navigation.navigate('Login')}
                title={'Go To Login'}
            />
        </View>
    );
};

export default HomeScreen;