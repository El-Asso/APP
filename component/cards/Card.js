import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native'
import { Icon, Card, Button, } from 'react-native-elements'

import StyledGlobal from '../../global.conf'

const eventTouchable = (props) => {
    console.log("eventTouchable", props)
};
const Book = (props) => {
    return (
        <TouchableOpacity style={StyledGlobal.card_book} onPress={() => eventTouchable(props)}>
            <Card.Title>{props.association.title}</Card.Title>
            <View style={StyledGlobal.card_body}>
                <Card.Image source={{ uri: props.association.image }} style={StyledGlobal.card_book_image} />
                <Text style={{ marginBottom: 10 }} numberOfLines={3} ellipsizeMode='tail'>
                    {props.association.description}
                </Text>
                <Button
                    icon={<Icon name='code' color='#ffffff' />}
                    buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                    title='VIEW NOW'
                    onPress={() => eventTouchable(props)} />
            </View>
        </TouchableOpacity>
    )
}


export default Book;