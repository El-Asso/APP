import React from 'react';
import { StyleSheet, Text, TextInput, View  } from 'react-native';
import { Input, CheckBox, Button } from 'react-native-elements';


class Account extends React.Component{

    render(){

        return(
            <View>
                <Input
                    label = 'Name'
                    placeholder='...'
                />
                <Input
                    label = 'Age'
                    placeholder='...'
                />
                <Input
                    label = 'Situation'
                    placeholder='...'
                />
                <Input
                    label = 'Projet'
                    placeholder='...'
                />
                <Button 
                    title="Continue"
                /> 
            </View>
        );
    }
}

export default Account;