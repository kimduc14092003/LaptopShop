import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Image,Text } from 'react-native';

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Thực hiện xử lý đăng nhập
        console.log('Đăng nhập với tài khoản:', username, 'và mật khẩu:', password);
        props.navigation.navigate('Home');
    };
    const handleRegister = () => {
        // Chuyển tới màn hình đăng ký
        console.log('Chuyển tới màn hình đăng ký');
        props.navigation.navigate('Register');

      };
    
    return (
        <View style={styles.container}>

            <Image
                style={styles.logoImage}
                source={{
                    uri: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/laptop-shop-logo-design-template-9cfc65f53bb2dcc9c0df6899c69f9f1d_screen.jpg?ts=1655789327'
                }}
            />

            <TextInput
                style={styles.input}
                placeholder="Tên đăng nhập"
                onChangeText={(text) => setUsername(text)}
                value={username}
            />
            <TextInput
                style={styles.input}
                placeholder="Mật khẩu"
                secureTextEntry
                onChangeText={(text) => setPassword(text)}
                value={password}
            />
            <Button title="Đăng nhập" onPress={handleLogin} />
            <Text style={styles.registerText} onPress={handleRegister}>
                Bạn chưa có tài khoản ?
            </Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 10,
        width: '90%'
    },
    logoImage: {
        height: 200,
        width: 200,
        marginBottom: 40
    },
    registerText: {
        textAlign: 'center',
        marginTop: 12,
        color: 'blue',
        textDecorationLine: 'underline',
      },
});

export default Login;