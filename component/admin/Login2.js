import React, { Component } from 'react';
import { Button, Input, ThemeProvider, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

class Login extends React.Component {
  render() {
    return (
       <ThemeProvider>
           <Text h1>Heading 1</Text>
           <Input
               placeholder='BASIC INPUT'
           />

           <Input
               placeholder='INPUT WITH ICON'
               leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
           />
           <Input
                placeholder='INPUT WITH CUSTOM ICON'
                leftIcon={
                    <Icon
                    name='user'
                    size={24}
                    color='black'
            />
                }
            />
            <Button
                title="Clear button"
                type="clear"
            />

       </ThemeProvider>
    );
  }
}

export default Login;
