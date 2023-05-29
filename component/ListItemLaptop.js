import React, { useState } from "react";
import { View, Text, stheet, TouchableOpacity, Image, StyleSheet, FlatList } from "react-native";
import { Header, Icon } from '@rneui/themed';
import { LinearGradient } from 'expo-linear-gradient';
import Swiper from "react-native-swiper";
import { ListItem } from "@rneui/base";

const ListItemLaptop = (props) => {

    const renderItem = (laptop) => {
        return (
            <ListItem style={st.listItem} bottomDivider>
                <Image source={{ uri: laptop.item.image }} style={st.image} />
                <ListItem.Content>
                    <ListItem.Title>{laptop.item.name}</ListItem.Title>
                    <View style={st.detailsContainer}>
                        <Icon name="microchip" type="font-awesome" color="#000" />
                        <Text style={st.price}>{laptop.item.cpu}</Text>
                    </View>
                    <View style={st.detailsContainer}>
                        <Icon name="desktop" type="font-awesome" color="#000" />
                        <Text style={st.price}>{laptop.item.gpu}</Text>
                    </View>
                    <View style={st.detailsContainer}>
                        <Icon name="dollar" type="font-awesome" color="#000" />
                        <Text style={st.price}>{formatNumber(laptop.item.price)} đ</Text>
                    </View>
                </ListItem.Content>
            </ListItem>
        )
    }

    let formatNumber=(numberInput)=>{
        return numberInput.toLocaleString();
    }

    const dataListLaptop = [
        { id: '1', name: 'Acer Nitro 5',price: 20000000,cpu:'Core i5 12500H',gpu:'RTX 3050 4GB', image: 'https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/3/10/638140612136202106_acer-nitro-gaming-an515-58-dd.jpg' },
        { id: '2', name: 'Acer Nitro 5', price: 20000000,cpu:'Core i5 12500H',gpu:'RTX 3050 4GB', image: 'https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/3/10/638140612136202106_acer-nitro-gaming-an515-58-dd.jpg' },
        { id: '4', name: 'Acer Nitro 5', price: 20000000,cpu:'Core i5 12500H',gpu:'RTX 3050 4GB', image: 'https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/3/10/638140612136202106_acer-nitro-gaming-an515-58-dd.jpg' },
        { id: '5', name: 'Acer Nitro 5', price: 20000000,cpu:'Core i5 12500H',gpu:'RTX 3050 4GB', image: 'https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/3/10/638140612136202106_acer-nitro-gaming-an515-58-dd.jpg' },
        { id: '6', name: 'Acer Nitro 5', price: 20000000,cpu:'Core i5 12500H',gpu:'RTX 3050 4GB', image: 'https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/3/10/638140612136202106_acer-nitro-gaming-an515-58-dd.jpg' },
        { id: '7', name: 'Acer Nitro 5', price: 20000000,cpu:'Core i5 12500H',gpu:'RTX 3050 4GB', image: 'https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/3/10/638140612136202106_acer-nitro-gaming-an515-58-dd.jpg' },
        { id: '8', name: 'Acer Nitro 5', price: 20000000,cpu:'Core i5 12500H',gpu:'RTX 3050 4GB', image: 'https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/3/10/638140612136202106_acer-nitro-gaming-an515-58-dd.jpg' },
        { id: '9', name: 'Acer Nitro 5', price: 20000000,cpu:'Core i5 12500H',gpu:'RTX 3050 4GB', image: 'https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/3/10/638140612136202106_acer-nitro-gaming-an515-58-dd.jpg' },
        { id: '10', name: 'Acer Nitro 5', price: 20000000,cpu:'Core i5 12500H',gpu:'RTX 3050 4GB', image: 'https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/3/10/638140612136202106_acer-nitro-gaming-an515-58-dd.jpg' },
        { id: '11', name: 'Acer Nitro 5', price: 20000000,cpu:'Core i5 12500H',gpu:'RTX 3050 4GB', image: 'https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/3/10/638140612136202106_acer-nitro-gaming-an515-58-dd.jpg' },

    ]

    return (
        <View style={st.main}>
            <Header
                backgroundColor="#e5e5e5"
                barStyle="default"
                centerComponent={{
                    text: "LAPTOP XYZ",
                    style: { color: "#000" },
                    size: 36
                }}
                centerContainerStyle={{}}
                leftComponent={{ icon: "menu", color: "#000" }}
                placement="left"
                rightComponent={
                    <View style={st.headerRight}>
                        <TouchableOpacity onPress={() => {
                            console.log("Press right button");
                        }}>
                            <Image
                                source={{
                                    uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png'
                                }}
                                style={{ width: 20, height: 20, borderRadius: 20 / 2 }}
                            />
                        </TouchableOpacity>
                    </View>}
                containerStyle={{ height: 90 }}
            />
            <View style={st.container}>
                <View style={st.swiperView}>
                    <Swiper style={st.wrapper} showsButtons loop={true} autoplay={true}>
                        <View testID="img1" style={st.slide1}>
                            <Image source={{
                                uri: 'https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/5/19/638201360570266680_F-C1_1200x300.png'
                            }}
                                style={st.swiperImage}
                            />
                        </View>
                        <View testID="img2" style={st.slide1}>
                            <Image source={{
                                uri: 'https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/5/8/638191577309244728_F-C1_1200x300.png'
                            }}
                                style={st.swiperImage}
                            />
                        </View>
                        <View testID="img3" style={st.slide1}>
                            <Image source={{
                                uri: 'https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/5/22/638203741047680050_F-C1_1200x300.png'
                            }}
                                style={st.swiperImage}
                            />
                        </View>
                        <View testID="img4" style={st.slide1}>
                            <Image source={{
                                uri: 'https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/5/9/638192507382260550_F-C1_1200x300.png'
                            }}
                                style={st.swiperImage}
                            />
                        </View>
                    </Swiper>

                </View>
                <View >
                    <FlatList
                        style={st.listView}
                        data={dataListLaptop}
                        renderItem={renderItem}
                        keyExtractor={(item_key) => { return item_key.id }}
                    />
                </View>
            </View>

        </View>
    )

}

const st = StyleSheet.create({
    main: {
        //justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    }, title: {
        color: '#000',
        fontSize: 18,
    }, headerSt: {
        height: 60
    },
    headerRight: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 5,
    },
    container: {
        height: '100%'
    },
    swiperView: {
        height: '15%'
    },
    wrapper: {},
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: '#9DD6EB'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }, swiperImage: {
        height: '100%',
        width: '100%',
    }, listView: {
        flexDirection:'column',
       // flexWrap: 'wrap',
        width: '100%',
    }
    ,listItem:{
        flex:1,
       // width:'40%'
    }
    , image: {
        width: 80,
        height: 80,
        borderRadius: 5,
    },
    detailsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    rating: {
        marginLeft: 5,
        fontSize: 12,
        color: '#888',
    },
    price: {
        marginLeft: 10,
        fontSize: 14,
    },
})

export default ListItemLaptop;

