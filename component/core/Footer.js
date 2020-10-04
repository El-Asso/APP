import React, { useState, useEffect } from 'react';
import StyledGlobal from '../../global.conf'
import { BottomSheet, ListItem, Text } from 'react-native-elements'

const Footer = ({ eve = false }) => {
    const [isVisible, setIsVisible] = useState(eve);

    const list = [
        {
            title: 'List Item 1',
            onPress: () => console.log('List Item 1'),
        },
        {
            title: 'List Item 2',
            onPress: () => console.log('List Item 1'),
        },
        {
            title: 'Cancel',
            containerStyle: { backgroundColor: 'red' },
            titleStyle: { color: 'white' },
            onPress: () => setIsVisible(false),
        },
    ];

    return (
        <BottomSheet isVisible={isVisible}>
            {list.map((l, i) => (
                <ListItem key={i} containerStyle={l.containerStyle} onPress={l.onPress}>
                    <ListItem.Content>
                        <ListItem.Title style={l.titleStyle}><Text>{l.title}</Text></ListItem.Title>
                    </ListItem.Content>
                </ListItem>
            ))}
        </BottomSheet>
    )
}

export default Footer;