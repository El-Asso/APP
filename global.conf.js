import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, StyleSheet } from 'react-native'

const screen = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
}

const styles = StyleSheet.create({
    container: {
        zIndex: 0,
        position: 'relative',
        backgroundColor: '#ffffcc',
        flex: 1,
        flexDirection: "column",
        // justifyContent: "flex-end"
    },
    header: {
        zIndex: 1,
        color: "#000",
        position: 'relative',
        width: screen.width,
        fontWeight: 'bold',
        backgroundColor: 'rgba(0,0,0,0)',
        justifyContent: 'space-around',
        alignItems: "flex-start"
    },
    mapview: {
        zIndex: 0,
        position: "absolute",
        width: screen.width,
        height: screen.height,
    },
    card: {
        position: "absolute",
        zIndex: 1050,
        bottom: 0,        
    },
    card_book: {
        position: "relative",
        marginVertical: 36,
        marginHorizontal: 36,
        zIndex: 1050,
        bottom: 0,
        backgroundColor: "#fff",
        borderRadius: 20,
    },
    card_book_image: {

    },
})

export default styles;