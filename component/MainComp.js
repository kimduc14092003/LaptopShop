import React, { useState } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from "react-native";
import ListItemLaptop from "./ListItemLaptop";
import FindItemComp from "./FindItemComp";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import UserComp from "./UserComp";
import CartComp from "./CartComp";

const Tab = createBottomTabNavigator();
const MainComp = (props) => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Scene1" component={ListItemLaptop} options={{headerShown:false,tabBarLabel: 'Danh sách',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="view-list" color={color} size={size} />
            ),}} />
            <Tab.Screen name="Scene2" component={FindItemComp} options={{headerShown:false,tabBarLabel: 'Tìm kiếm',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="file-find-outline" color={color} size={size} />
            ),}} />
            <Tab.Screen name="Scene3" component={CartComp} options={{headerShown:false,tabBarLabel: 'Giỏ hàng',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="cart" color={color} size={size} />
            ),}} />
            <Tab.Screen name="Scene4" component={UserComp} options={{headerShown:false,tabBarLabel: 'Người dùng',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />
            ),}} />
        </Tab.Navigator>
    )
}

export default MainComp;