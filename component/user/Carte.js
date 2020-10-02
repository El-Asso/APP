import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


class Carte extends React.Component {
    constructor(state){
        super(props)
        this.state={
            asso = []
        }
    }

    render(){
        return(
            <View>
                <Text>
                    Carte
                </Text>
            </View>
        );
    }
}

export default Carte;