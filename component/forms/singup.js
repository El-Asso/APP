import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Input, CheckBox, Button } from 'react-native-elements';


class Association extends React.Component {
    render() {
        return (
            <View style={style.view}>
                <Input
                    label='Username'
                    placeholder='...'
                />
                <Input
                    label='Password'
                    placeholder='...'
                />
                <Button
                    title="Continue"
                />
                <CheckBox
                    title='Creat account'

                />
            </View>
        );
    }
}

class SingupUser extends React.Component {
    render() {
        return (
            <View style={style.view}>
                <Input
                    label='Username'
                    placeholder='...'
                />
                <Input
                    label='Password'
                    placeholder='...'
                />
                <Button
                    title="Continue"
                />
                <CheckBox
                    title='Creat account'

                />
            </View>
        );
    }
}
const style = StyleSheet.create({
    view: {
        paddingTop: 90,
    },
    input: {
        height: 40,
        borderRadius: 30,
        borderColor: 'blue',
        borderWidth: 3,
    }
})


export default {User};
