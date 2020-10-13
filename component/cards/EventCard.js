import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native'
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import {
    Icon,
    //   Card,
    Button,
} from 'react-native-elements'

import StyledGlobal from '../../global.conf'


const EventCard = ({ events }) => {
    const eventTouchable = (props) => {
        console.log("eventTouchable", props)

    };
    return (
        <TouchableOpacity style={StyledGlobal.card_book} onPress={() => eventTouchable(eventsA)}>
            <View style={StyledGlobal.card_body}>
                <Card>
                    <CardImage
                        source={{ uri: events.image }}
                        title={events.titre}
                    />
                      <CardTitle 
                        subtitle={events.date}
                    />
                </Card>
            </View>
        </TouchableOpacity>
    )
}


export default EventCard;