import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

const RegisterComp = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [fullname, setFullname] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    const handleRegister = () => {
        if (password !== confirmPassword) {
            console.log('Mật khẩu xác nhận không khớp');
            return;
        }

        // Thực hiện xử lý đăng ký
        console.log('Đăng ký với tài khoản:', username, 'và mật khẩu:', password);
        returnLoginScreen();
    };

    const returnLoginScreen = () => {
        props.navigation.navigate('Login');
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>ĐĂNG KÍ TÀI KHOẢN</Text>
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
            <TextInput
                style={styles.input}
                placeholder="Xác nhận mật khẩu"
                secureTextEntry
                onChangeText={(text) => setConfirmPassword(text)}
                value={confirmPassword}
            />
            <TextInput
                style={styles.input}
                placeholder="Họ và tên"
                onChangeText={(text) => setFullname(text)}
                value={fullname}
            />
            <TextInput
                style={styles.input}
                placeholder="Số điện thoại"
                onChangeText={(text) => setPhone(text)}
                value={phone}
            />
            <TextInput
                style={styles.input}
                placeholder="Địa chỉ"
                onChangeText={(text) => setAddress(text)}
                value={address}
            />
            <Button title="Đăng ký" onPress={handleRegister} />
            <Text style={styles.registerText} onPress={returnLoginScreen}>
                Bạn đã có tài khoản ?
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    title: {
        width: '100%',
        textAlign: 'center',
        fontSize: 30,
        marginBottom: 40
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 10,
    },
    registerText: {
        textAlign: 'center',
        marginTop: 12,
        color: 'blue',
        textDecorationLine: 'underline',
      },
});

export default RegisterComp;
