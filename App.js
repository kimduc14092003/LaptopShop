import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ListItem from './component/ListItemLaptop';
import Login from './component/Login';
import ListItemLaptop from './component/ListItemLaptop';
import MainComp from './component/MainComp';
import RegisterComp from './component/RegisterComp';

const StackDemo = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
          <StackDemo.Navigator  initialRouteName='Home'>
            <StackDemo.Screen name='Login' component={Login} options={ {headerShown:false}} />
            <StackDemo.Screen name='Register' component={RegisterComp} options={ {headerShown:false}} />
            <StackDemo.Screen name='Home' component={MainComp} options={ {headerShown:false}} />
		{/* viết tiếp các màn hình khác vào đây */}
          </StackDemo.Navigator>
      </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
