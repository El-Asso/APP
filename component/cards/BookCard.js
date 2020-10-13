import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native'
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import { Icon, 
    // Card, 
    Button, } from 'react-native-elements'

import StyledGlobal from '../../global.conf'


const BookCard = ({ association, action }) => {
    const eventTouchable = (props) => {
        console.log("eventTouchable", props._id)
        action("association", props._id )

    };
    const setLogo = (logo_obj) => {
        if (logo_obj) {
            return logo_obj.original
        }
        return "https://www.belin-beliet.fr/medias/2019/04/associations.jpg"
    }
    return (
        <TouchableOpacity style={StyledGlobal.card_book} onPress={() => eventTouchable(association)}>
            <View style={StyledGlobal.card_body}>
                {/* <Card.Image source={{ uri: setLogo(association.logo) }} style={StyledGlobal.card_book_image} />
                <Text style={{ marginBottom: 10 }} numberOfLines={3} ellipsizeMode='tail'>
                    {association.objet}
                </Text>
                <Button
                    icon={<Icon name='code' color='#ffffff' />}
                    buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                    title='VIEW NOW'
                    onPress={() => eventTouchable(association)} /> */}
                                <Card>
                    <CardImage
                        source={{ uri: setLogo(association.logo) }}
                        title=""
                    />
                    <CardContent text={association.objet.slice(0, 100)+"..."} style={{ marginBottom: 10, numberOfLines:3 }} numberOfLines={3} ellipsizeMode='tail'/>
                    <CardAction
                        separator={true}
                        inColumn={false}>
                        <CardButton
                            onPress={() => eventTouchable(association)}
                            title="PLUS D'INFO"
                            color="blue"
                        />
                    </CardAction>
                </Card>
            </View>
        </TouchableOpacity>
    )
}


export default BookCard;