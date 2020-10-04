import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native'
import StyledGlobal from '../../global.conf'
import { Header, Icon, } from 'react-native-elements'
class Navbar extends React.Component {
    constructor(state) {
        super(state)
        this.Center = this.Center.bind(this)
    }


    Left() {
        return (
            <Icon
                name='menu'
                color={StyledGlobal.header.color}
                onPress={() => console.log('NavbarComponents.left')}
            />
        )
    }
    Center() {
        return (
            <Text style={{ color: StyledGlobal.header.color, fontWeight: StyledGlobal.header.fontWeight }}>{ this.props.title}</Text>
        )
    }
    Right() {
        return (
            <Icon
                name='home'
                color={StyledGlobal.header.color}
                onPress={() => console.log('NavbarComponents.right')}
            />
        )
    }
    render() {
        return (
            <View style={StyledGlobal.header}>
                <Header
                    statusBarProps={{ barStyle: 'light' }}
                    placement="center"
                    leftComponent={this.Left}
                    centerComponent={this.Center}
                    rightComponent={this.Right}
                    containerStyle={{ backgroundColor: StyledGlobal.header.backgroundColor, justifyContent: StyledGlobal.header.justifyContent }}
                />
            </View>
        )
    }
}
export default Navbar;