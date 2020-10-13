import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native'
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import {
    Icon,
    //   Card,
    Button,
} from 'react-native-elements'

import StyledGlobal from '../../global.conf'


const EventCard = ({ eventsA, action }) => {
    const eventTouchable = (props) => {
        console.log("eventTouchable", props)
        action("association", props)

    };
    return (
        <TouchableOpacity style={StyledGlobal.card_book} onPress={() => eventTouchable(eventsA)}>
            <View style={StyledGlobal.card_body}>
                <Card>
                    <CardImage
                        source={{ uri: 'http://placehold.it/480x270' }}
                        title="Above all i am here"
                    />
                </Card>
            </View>
        </TouchableOpacity>
    )
}


export default EventCard;