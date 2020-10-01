import React from 'react';
import { StyleSheet, Text, TextInput, View  } from 'react-native';
import { Input, CheckBox, Button } from 'react-native-elements';


class Login extends React.Component{

    render(){

        return(
            <View>
                <Input
                    label = 'Username'
                    placeholder='...'
                />
                <Input
                    label = 'Password'
                    placeholder='...'
                />
                
            </View>
        );
    }
}

export default Login;