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
                    <CardTitle
                        title="This is a title"
                        subtitle="This is subtitle"
                    />
                    <CardContent text="Your device will reboot in few seconds once successful, be patient meanwhile" />
                    <CardAction
                        separator={true}
                        inColumn={false}>
                        <CardButton
                            onPress={() => { }}
                            title="Push"
                            color="blue"
                        />
                        <CardButton
                            onPress={() => { }}
                            title="Later"
                            color="blue"
                        />
                    </CardAction>
                </Card>
            </View>
        </TouchableOpacity>
    )
}


export default EventCard;