import React from 'react';
import { View, Text } from 'react-native'
import { Avatar, Input, ButtonGroup, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import StyledGlobal from '../global.conf'
import { RegistrationUser, RegistrationAssociation } from "../API/index"

class User extends React.Component {
    componentDidMount() {
        console.log("componentDidMount:User", true)
    }
    componentDidUpdate() {
        console.log("componentDidUpdate:User")
    }
    render() {
        return (
            <>
                <Input
                    style={{ textAlign: "center" }}
                    placeholder="username"
                />
                <Input
                    style={{ textAlign: "center" }}
                    placeholder="email"
                />
                <Input
                    style={{ textAlign: "center" }}
                    placeholder="password"
                />
                <Input
                    style={{ textAlign: "center" }}
                    placeholder="password"
                />
                <Button
                    type="outline"
                    title="NEXT  "
                    iconRight
                    icon={
                        <Icon
                            name="arrow-right"
                            size={15}
                            color="black"
                        />
                    }
                />
            </>
        );
    }
}


class Main extends React.Component {
   
    componentDidMount() {
        console.log("componentDidMount::Main")
    }
    componenteUserButton() {
        return (<Button
            title="USER"
            type="outline"
        />)
    }
    componenteAssociationButton() {
        return (<Button
            title="ASSOCIATION"
            type="outline"
        />)
    }

    render() {
        return (
            <>
                
                <View style={[StyledGlobal.container, StyledGlobal.registration]}>
                    <Text style={{ fontWeight: "bold", fontSize: 35 }}> Registration </Text>

                   <User /> 
                   
                </View>
            </>
        )
    }
}



export default Main;